import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import SwitchButton from '../SwitchButton';
import DatePicker from '../DatePicker';
import { TextInput } from '@components';
import styles from './styles';

interface ItemCardProps {
    item: {
        id: string;
        values: { key: string, title: string, value: string | boolean | number, type: string }[];
    };
    title_key: string;
    onRemoveItem: (item_id: string) => void;
    onChangeFieldValue: (item_id: string, field_key: string, field_value: string) => void;
    onChangeCategoryTitle: (item_id: string, value: string) => void;
    onSelectTitleField: (item_id: string, field_key: string) => void;
}

const ItemCard = ({ item, title_key, onRemoveItem, onChangeFieldValue, onChangeCategoryTitle, onSelectTitleField }: ItemCardProps) => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    const handleOnRemoveItem = () => {
        if (onRemoveItem) {
            onRemoveItem(item.id);
        }
    }

    const handleOnChangeFieldValue = (field_key: string, field_value: string) => {
        if (onChangeFieldValue) {
            onChangeFieldValue(item.id, field_key, field_value);
        }
    }

    // const cardTitle = item.values.find((value) => value.key === title_key)?.value || "Unnamed Item";
    const cardTitle = `Title Field: ${item.values.find((value: FieldType) => value.key === title_key)?.value || "Unnamed Field"} `

    return (
        <Card style={[styles.container, { width: cardWidth }]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>{cardTitle}</Text>
                {
                    item.values?.map((field, index) => {
                        console.log("title_key", { title_key, field });
                        switch (field.type) {
                            case "date":
                                return (
                                    <DatePicker
                                        title={field.title}
                                        value={String(field.value)}
                                        onChangeDate={(text) => handleOnChangeFieldValue(field.key, text)}
                                    />
                                );
                            case "checkbox":
                                return (
                                    <SwitchButton
                                        key={index}
                                        title={field.title}
                                        value={Boolean(field.value === "true" ? true : false)}
                                        onChangeValue={(text) => handleOnChangeFieldValue(field.key, String(text))}
                                    />
                                );

                            case "number":
                                return (
                                    <TextInput
                                        key={index}
                                        mode="outlined"
                                        label={field.title}
                                        placeholder={field.title}
                                        value={String(field.value)}
                                        keyboardType='numeric'
                                        onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                    />
                                );
                            default:
                                return (
                                    <TextInput
                                        key={index}
                                        mode="outlined"
                                        label={field.title}
                                        placeholder={field.title}
                                        value={String(field.value)}
                                        onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                    />
                                );
                        }
                    })
                }
                <View style={styles.footerContainer}>
                    <Button mode="contained" onPress={handleOnRemoveItem}>Remove</Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default ItemCard