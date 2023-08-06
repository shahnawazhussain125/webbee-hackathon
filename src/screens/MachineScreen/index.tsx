import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { addNewItem, categoriesSelector, changeCategoryTitle, changeItemFieldValue, removeItem, selectTitleField } from '../../redux/slices/appSlice';
import { RouteProp, useFocusEffect } from '@react-navigation/native';
import { CategoryType, ItemType, ItemValueType } from '@types';
import { useAppDispatch, useAppSelector } from '@hooks';
import { Button, Text } from 'react-native-paper';
import ItemCard from '../../components/ItemCard';
import { generateUID } from '@utils';
import styles from './styles';

type MachineScreenProps = {
    route: RouteProp<{ params: { categoryId: string } }, 'params'>;
};

const MachineScreen = (props: MachineScreenProps) => {
    const { categoryId } = props.route.params;
    const dispatch = useAppDispatch();
    const categories = useAppSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryType | null>(null);
    const machines = selectedCategory?.items || [];

    useFocusEffect(
        React.useCallback(() => {
            if (categories.length > 0) {
                const _selectedCategory = categories.find((category: CategoryType) => category.id === categoryId);
                setSelectedCategory(_selectedCategory);
            }
        }, [categories, categoryId])
    );

    const renderCategoryItem = ({ item }: ItemType) => {
        if (!selectedCategory) return null;
        item.values = selectedCategory.fields?.map((field) => ({ ...field, value: item.values.find((value: ItemValueType) => value.key === field.key)?.value }));

        return <ItemCard
            item={item}
            title_key={selectedCategory.item_title_key}
            onRemoveItem={handleOnRemoveItem}
            onChangeFieldValue={handleOnChangeFieldValue}
            onChangeCategoryTitle={handleOnChangeCategoryTitle}
            onSelectTitleField={handleOnSelectTitleField}
        />;
    }

    const handleOnAddItem = async (): Promise<void> => {
        try {
            if (!selectedCategory) return;
            const payload = {
                categoryId: selectedCategory.id,
                item: {
                    id: generateUID(),
                    values: selectedCategory.fields.map(field => ({ key: field.key, value: "" }))
                }
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
                categoryId: selectedCategory.id,
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
                categoryId: selectedCategory.id,
                itemId: item_id,
                fieldKey: field_key,
                value: value,
            };

            await dispatch(changeItemFieldValue(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeCategoryTitle = async (category_id: string, value: string): Promise<void> => {
        try {
            const payload = {
                categoryId: category_id,
                value: value,
            };

            await dispatch(changeCategoryTitle(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnSelectTitleField = async (category_id: string, field_key: string) => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
            };

            await dispatch(selectTitleField(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.titleText}>Machines</Text>
                <Button mode="contained" onPress={handleOnAddItem}>
                    Add New Item
                </Button>
            </View>
            <FlatList
                data={machines}
                numColumns={2}
                renderItem={renderCategoryItem}
                contentContainerStyle={{ paddingHorizontal: 15, }}
            />
        </View>
    )
}

export default MachineScreen;