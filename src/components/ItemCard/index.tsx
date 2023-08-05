import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { TextInput } from '@components';
import styles from './styles';
import { vw } from '@utils';

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
                <Text style={styles.titleText}>{item?.title}</Text>
                {
                    item.values?.map((field, index) => {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                <TextInput
                                    mode="outlined"
                                    label={field.title}
                                    value={field.value}
                                    onChangeText={(text) => handleOnChangeFieldValue(field.key, text)}
                                />
                            </View>
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