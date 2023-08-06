import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { categoriesSelector } from '../../redux/slices/categorySlice';
import { addNewItem, changeItemFieldValue, itemsSelector, removeItem } from '../../redux/slices/itemSlice';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { CategoryType, ItemType, ItemValueType } from '@types';
import { useAppDispatch, useAppSelector } from '@hooks';
import { Button, Text } from 'react-native-paper';
import ItemCard from '../../components/ItemCard';
import { generateUID } from '@utils';
import styles from './styles';

type ItemScreenProps = {
    route: RouteProp<{ params: { categoryId: string } }, 'params'>;
};

const ItemScreen = (props: ItemScreenProps) => {
    const { categoryId } = props.route.params;
    const dispatch = useAppDispatch();
    const categories = useAppSelector(categoriesSelector);
    const allItems = useAppSelector(itemsSelector);
    const [selectedCategoryItems, setSelectedCategoryItems] = React.useState<ItemType[]>([]);
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryType | null>(null);


    useFocusEffect(
        React.useCallback(() => {
            if (categories.length > 0) {
                setSelectedCategory(categories.find((category: CategoryType) => category.id === categoryId));
                setSelectedCategoryItems(allItems.filter((item: ItemType) => item.category_id === categoryId));
            }
        }, [categories, categoryId])
    );

    const renderCategoryItem = ({ item }: ItemType) => {
        if (!selectedCategory) return null;
        return <ItemCard
            item={item}
            fields={selectedCategory.fields}
            title_key={selectedCategory.item_title_key}
            onRemoveItem={handleOnRemoveItem}
            onChangeFieldValue={handleOnChangeFieldValue}
        />;
    }

    const handleOnAddItem = async (): Promise<void> => {
        try {
            if (!selectedCategory) return;
            const payload = {
                id: generateUID(),
                category_id: selectedCategory.id,
                values: selectedCategory.fields.map(field => ({ key: field.key, value: "" }))
            };

            await dispatch(addNewItem(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveItem = async (item_id: string): Promise<void> => {
        try {
            if (!selectedCategory) return;

            const payload = {
                itemId: item_id,
            };

            await dispatch(removeItem(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeFieldValue = async (item_id: string, field_key: string, value: string): Promise<void> => {
        try {
            if (!selectedCategory) return;

            const payload = {
                itemId: item_id,
                fieldKey: field_key,
                value: value,
            };

            await dispatch(changeItemFieldValue(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{selectedCategory?.title}</Text>
                <Button mode="contained" onPress={handleOnAddItem}>
                    Add New Item
                </Button>
            </View>
            <FlatList
                data={selectedCategoryItems}
                numColumns={2}
                renderItem={renderCategoryItem}
                contentContainerStyle={{ paddingHorizontal: 15, }}
            />
        </View>
    )
}

export default ItemScreen;