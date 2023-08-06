import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { addNewItem, changeItemFieldValue, itemsSelector, removeItem } from '../../redux/slices/itemSlice';
import { useAppDispatch, useAppSelector } from '@hooks';
import { Button, Text } from 'react-native-paper';
import ItemCard from '../../components/ItemCard';
import { CategoryType, ItemType } from '@types';
import { generateUID } from '@utils';
import styles from './styles';

type ItemScreenProps = {
    category: CategoryType | undefined;
};

const CategoryItems = (props: ItemScreenProps) => {
    const { category } = props;
    const dispatch = useAppDispatch();
    const allItems = useAppSelector(itemsSelector);

    const renderCategoryItem = ({ item }: {
        item: ItemType;
    }) => {
        if (!category) return null;
        return <ItemCard
            item={item}
            fields={category.fields}
            title_key={category.item_title_key}
            onRemoveItem={handleOnRemoveItem}
            onChangeFieldValue={handleOnChangeFieldValue}
        />;
    }

    const handleOnAddItem = async (): Promise<void> => {
        try {
            if (!category) return;
            const payload = {
                id: generateUID(),
                category_id: category.id,
                values: category.fields.map(field => ({ key: field.key, value: "" }))
            };

            await dispatch(addNewItem(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveItem = async (item_id: string): Promise<void> => {
        try {
            if (!category) return;

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
            if (!category) return;

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
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>{category?.title}</Text>
                <Button mode="contained" onPress={handleOnAddItem}>
                    Add New Item
                </Button>
            </View>
            <FlatList
                data={allItems.filter(item => item.category_id === category?.id)}
                numColumns={2}
                renderItem={renderCategoryItem}
                contentContainerStyle={{ paddingHorizontal: 15, }}
            />
        </>
    )
}

export default CategoryItems;