import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';
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


const CategoryCard = ({ item, addNewField, removeField, removeCategory, onChangeFieldValue, onChangeCategoryTitle, onSelectTitleField }) => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    const handleOnAddField = (field_type) => {
        addNewField(item.id, field_type);
    }
    const handleOnRemoveField = (field_key) => {
        removeField(item.id, field_key);
    }

    const handleOnRemoveCategory = () => {
        removeCategory(item.id);
    }

    const handleOnChangeFieldValue = (field_key, field_value) => {
        onChangeFieldValue(item.id, field_key, field_value);
    }

    const handleOnChangeCategoryTitle = (value) => {
        onChangeCategoryTitle(item.id, value);
    }

    const handleOnSelectTitleField = (field_key) => {
        onSelectTitleField(item.id, field_key)
    }

    const titleFields = item.fields.map(field => ({ label: field.title, value: field.key }));

    const textFieldLable = `Title Field: ${item.fields.find(field => field.key === item.item_title_key)?.title || "Unnamed Field"} `

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
                />
                {
                    item.fields.map((field, index) => {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                <TextInput
                                    mode="outlined"
                                    label="Field"
                                    placeholder={field.title}
                                    value={field.title}
                                    onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                />
                                <Text variant="bodyLarge" style={styles.fieldTypeText}>{field.type}</Text>
                                <IconButton
                                    icon="camera"
                                    iconColor={colours.black}
                                    size={20}
                                    onPress={() => handleOnRemoveField(field.key)}
                                />
                            </View>
                        )
                    })
                }

                <DropdownButton title={textFieldLable} onSelectItem={handleOnSelectTitleField} dropdownOptions={titleFields} />

                <View>
                    <DropdownButton title="Title Field" onSelectItem={handleOnAddField} dropdownOptions={dropdownOptions} />
                    <Button mode="outlined" onPress={handleOnRemoveCategory} >
                        Remove
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default CategoryCard