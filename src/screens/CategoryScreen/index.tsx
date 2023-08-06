import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import CategoryCard from "../../components/CategoryCard"
import { addCategory, addNewField, categoriesSelector, changeCategoryTitle, changeFieldTitle, removeCategory, removeField, selectTitleField } from '../../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { CategoryType } from '@types';
import { generateUID } from '@utils';
import styles from './styles';

const CategoryScreen: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);

    const renderCategoryItem = ({ item }: { item: CategoryType }) => {
        return <CategoryCard
            item={item}
            addNewField={handleOnNewField}
            removeField={handleOnRemoveField}
            removeCategory={handleOnRemoveCategory}
            onChangeFieldValue={handleOnChangeFieldValue}
            onChangeCategoryTitle={handleOnChangeCategoryTitle}
            onSelectTitleField={handleOnSelectTitleField}
        />;
    }

    const handleOnAddCategory = async () => {
        try {
            const payload = {
                id: generateUID(),
                title: "New Catgory",
                fields: [{
                    title: "Field",
                    type: "text",
                    key: generateUID(),
                }],
                items: []
            };

            await dispatch(addCategory(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnNewField = async (category_id: string, field_type: string): Promise<void> => {
        try {
            const payload = {
                categoryId: category_id,
                field: {
                    title: "Field",
                    type: field_type,
                    key: generateUID(),
                }
            };

            await dispatch(addNewField(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveField = async (category_id: string, field_key: string): Promise<void> => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
            };

            await dispatch(removeField(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveCategory = async (category_id: string): Promise<void> => {
        try {
            const payload = {
                categoryId: category_id,
            };

            await dispatch(removeCategory(payload))
        } catch (error: any) {
            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeFieldValue = async (category_id: string, field_key: string, value: string): Promise<void> => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
                value: value,
            };

            await dispatch(changeFieldTitle(payload))
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
            <FlatList
                data={categories}
                numColumns={2}
                renderItem={renderCategoryItem}
                contentContainerStyle={{ alignItems: "center" }}
            />
            <View style={{ height: 100, paddingHorizontal: 20, justifyContent: "center" }}>
                <Button mode="contained" onPress={handleOnAddCategory}>
                    Add Category
                </Button>
            </View>
        </View>
    )
}

export default CategoryScreen;