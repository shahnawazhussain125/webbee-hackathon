import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';
import { FieldType, CategoryType } from '@types'
import DropdownButton from '../DropdownButton';
import { TextInput } from '@components';
import { colours } from '@theme';
import styles from './styles';
import { vw } from '@utils';

const dropdownOptions = [
    { label: 'Text', value: 'text' },
    { label: 'Checkbox', value: 'checkbox' },
    { label: 'Number', value: 'number' },
    { label: 'Date', value: 'date' },
];

interface CategoryCardProps {
    item: CategoryType;
    addNewField: (category_id: string, field_type: string) => void;
    removeField: (category_id: string, field_key: string) => void;
    removeCategory: (category_id: string) => void;
    onChangeFieldValue: (category_id: string, field_key: string, field_value: string) => void;
    onChangeCategoryTitle: (category_id: string, value: string) => void;
    onSelectTitleField: (category_id: string, field_key: string) => void;
}


const CategoryCard = ({ item, addNewField, removeField, removeCategory, onChangeFieldValue, onChangeCategoryTitle, onSelectTitleField }: CategoryCardProps) => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    const titleFields = item.fields.map(field => ({ label: field.title, value: field.key }));
    const textFieldLable = `Title Field: ${item.fields.find((field: FieldType) => field.key === item.item_title_key)?.title || "Unnamed Field"} `

    const handleOnAddField = (field_type: string) => {
        if (addNewField) {
            addNewField(item.id, field_type);
        }
    }

    const handleOnRemoveField = (field_key: string) => {
        if (removeField) {
            removeField(item.id, field_key);
        }
    }

    const handleOnRemoveCategory = () => {
        if (removeCategory) {
            removeCategory(item.id);
        }
    }

    const handleOnChangeFieldValue = (field_key: string, field_value: string) => {
        if (onChangeFieldValue) {
            onChangeFieldValue(item.id, field_key, field_value);
        }
    }

    const handleOnChangeCategoryTitle = (value: string) => {
        if (onChangeCategoryTitle) {
            onChangeCategoryTitle(item.id, value);
        }
    }

    const handleOnSelectTitleField = (field_key: string) => {
        if (onSelectTitleField) {
            onSelectTitleField(item.id, field_key)
        }
    }

    return (
        <Card style={[styles.container, { width: cardWidth }]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <TextInput
                    mode="outlined"
                    label="Category Name"
                    placeholder="Category Name"
                    value={item.title}
                    onChangeText={handleOnChangeCategoryTitle}
                    style={[styles.categoryNameInput, { width: cardWidth - 50 }]}
                />
                {
                    item.fields.map((field: FieldType, index: number) => {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                <TextInput
                                    mode="outlined"
                                    label="Field"
                                    placeholder={field.title}
                                    value={field.title}
                                    style={[styles.categoryNameInput, { width: cardWidth - 175 }]}
                                    onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                />
                                <Text variant="bodyLarge" style={styles.fieldTypeText}>{field.type}</Text>
                                <IconButton
                                    size={30}
                                    icon="trash-can-outline"
                                    iconColor={colours.black}
                                    onPress={() => handleOnRemoveField(field.key)}
                                />
                            </View>
                        )
                    })
                }
                <DropdownButton title={textFieldLable} onSelectItem={handleOnSelectTitleField} options={titleFields} />
                <View style={styles.footerRowContainer}>
                    <DropdownButton title="Add Field" onSelectItem={handleOnAddField} options={dropdownOptions} />
                    <Button mode="contained" onPress={handleOnRemoveCategory} >
                        Remove
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default CategoryCard