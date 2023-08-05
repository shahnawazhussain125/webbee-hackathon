import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';
import DropdownButton from '../DropdownButton';
import { TextInput } from '@components';
import { colours } from '@theme';
import styles from './styles';
import { vw } from '@utils';


const CategoryCard = ({ item, addNewField, removeField }) => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    const handleOnAddField = (field_type) => {
        addNewField(item.id, field_type);
    }
    const handleOnRemoveField = (field_key) => {
        removeField(item.id, field_key);
    }

    return (
        <Card style={[styles.container, { width: cardWidth }]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <TextInput
                    mode="outlined"
                    label="Category Name"
                    placeholder="Category Name"
                />
                {
                    item.fields.map((field, index) => {
                        return (
                            <View style={styles.rowContainer} key={index}>
                                <TextInput
                                    mode="outlined"
                                    label={field.title}
                                    placeholder={field.title}
                                    defaultValue={field.title}
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

                <Button mode="contained" onPress={() => console.log('Pressed')} >
                    Title Filed:
                </Button>
                <DropdownButton onSelectItem={handleOnAddField} />
                <View>
                    <Button mode="outlined" onPress={() => console.log('Pressed')} >
                        Add Field
                    </Button>
                    <Button mode="outlined" onPress={() => console.log('Pressed')} >
                        Remove
                    </Button>
                </View>
            </Card.Content>
        </Card>
    )
}

export default CategoryCard