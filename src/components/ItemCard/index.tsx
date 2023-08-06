import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { TextInput } from '@components';
import styles from './styles';
import { vw } from '@utils';
import DatePicker from '../DatePicker';

const ItemCard = ({ item, onRemoveItem, onChangeFieldValue, onChangeCategoryTitle, onSelectTitleField }) => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    const handleOnRemoveItem = () => {
        onRemoveItem(item.id);
    }

    const handleOnChangeFieldValue = (field_key, field_value) => {
        onChangeFieldValue(item.id, field_key, field_value);
    }

    return (
        <Card style={[styles.container, { width: cardWidth }]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>{item?.item}</Text>
                {
                    item.values?.map((field, index) => {
                        console.log("fieldfieldfield", field);

                        return (
                            field.type === "date" ?
                                <DatePicker
                                    title={field.title}
                                    value={field.value}
                                    onChangeDate={(text) => handleOnChangeFieldValue(field.key, text)}
                                /> :
                                <TextInput
                                    key={index}
                                    mode="outlined"
                                    label={field.title}
                                    placeholder={field.title}
                                    value={field.value}
                                    onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                />
                        )
                    })
                }

                <View>
                    <Button mode="outlined" onPress={handleOnRemoveItem} >
                        Remove
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default ItemCard