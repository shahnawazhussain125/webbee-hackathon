import React, { useEffect } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { addNewField, addNewItem, categoriesSelector, changeCategoryTitle, changeFieldTitle, changeItemFieldValue, removeCategory, removeField, removeItem, selectTitleField } from '../../redux/slices/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Text } from 'react-native-paper';
import ItemCard from '../../components/ItemCard';
import { CategoryType } from '@types';
import { generateUID } from '@utils';
import styles from './styles';


const MachineScreen: React.FC = () => {
    const dispatch = useDispatch();
    const categories = useSelector(categoriesSelector);
    const [selectedCategory, setSelectedCategory] = React.useState<CategoryType>(null);
    const machines = selectedCategory?.items || [];

    useEffect(() => {
        if (categories.length > 0) {
            setSelectedCategory(categories[0]);
        }
    }, [categories]);


    const renderCategoryItem = ({ item }) => {
        item.values = selectedCategory.fields?.map((field) => ({ key: field.key, title: field.title, value: item.values.find(value => value.key === field.key)?.value }));

        return <ItemCard
            item={item}
            onRemoveItem={handleOnRemoveItem}
            onChangeFieldValue={handleOnChangeFieldValue}
            onChangeCategoryTitle={handleOnChangeCategoryTitle}
            onSelectTitleField={handleOnSelectTitleField}
        />;
    }

    const handleOnAddItem = async () => {
        try {
            const payload = {
                categoryId: selectedCategory.id,
                item: {
                    id: generateUID(),
                    values: selectedCategory.fields.map(field => ({ key: field.key, value: "" }))
                }
            };

            console.log("payload", payload);


            await dispatch(addNewItem(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnRemoveItem = async (item_id) => {
        try {
            const payload = {
                categoryId: selectedCategory.id,
                itemId: item_id,
            };

            await dispatch(removeItem(payload))
        } catch (error) {
            console.log(error);

            Alert.alert("Error", error?.message);
        }
    }

    const handleOnChangeFieldValue = async (item_id, field_key, value) => {
        try {
            const payload = {
                categoryId: selectedCategory.id,
                itemId: item_id,
                fieldKey: field_key,
                value: value,
            };
            console.log("payload", payload);


            await dispatch(changeItemFieldValue(payload))
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

    console.log("machines", machines);

    return (
        <View style={styles.container}>
            <View style={{ height: 100 }}>
                <Text style={styles.titleText}>Machines</Text>
                <Button mode="contained" onPress={handleOnAddItem}>
                    Add New Item
                </Button>
            </View>
            <FlatList
                data={machines}
                numColumns={2}
                renderItem={renderCategoryItem}
                contentContainerStyle={{ alignItems: "center" }}
            />

        </View>
    )
}

export default MachineScreen;