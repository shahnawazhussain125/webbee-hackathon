import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import CategoryCard from "../../components/CategoryCard"
import { addCategory, addNewField, categoriesSelector, changeCategoryTitle, changeFieldTitle, removeCategory, removeField, selectTitleField } from '../../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { CategoryType } from '@types';
import { v4 as uuidv4 } from 'uuid';
import styles from './styles';
import { generateUID } from '@utils';

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CategoryScreen: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);
    const renderCategoryItem = ({ item }) => {
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
            const payload: CategoryType = {
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
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnNewField = async (category_id, field_type) => {
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
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveField = async (category_id, field_key) => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
            };

            await dispatch(removeField(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveCategory = async (category_id) => {
        try {
            const payload = {
                categoryId: category_id,
            };

            await dispatch(removeCategory(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeFieldValue = async (category_id, field_key, value) => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
                value: value,
            };

            await dispatch(changeFieldTitle(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeCategoryTitle = async (category_id, value) => {
        try {
            const payload = {
                categoryId: category_id,
                value: value,
            };

            console.log("payload", payload);


            await dispatch(changeCategoryTitle(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnSelectTitleField = async (category_id, field_key) => {
        try {
            const payload = {
                categoryId: category_id,
                fieldKey: field_key,
            };

            await dispatch(selectTitleField(payload))
        } catch (error) {
            console.log(error);

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