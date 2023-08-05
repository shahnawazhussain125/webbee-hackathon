import React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { Card, Text, IconButton, Button } from 'react-native-paper';
import DropdownButton from '../DropdownButton';
import { TextInput } from '@components';
import { colours } from '@theme';
import styles from './styles';
import { vw } from '@utils';


const CategoryCard = () => {
    const windowWidth = useWindowDimensions().width;
    const cardWidth = windowWidth / 2 - 40;

    return (
        <Card style={[styles.container, { width: cardWidth }]}>
            <Card.Content style={styles.contentContainer}>
                <Text style={styles.titleText}>Title</Text>
                <TextInput
                    mode="outlined"
                    label="Category Name"
                    placeholder="Category Name"
                />
                <View style={styles.rowContainer}>
                    <TextInput
                        mode="outlined"
                        label="Field"
                        placeholder="Field Name"
                    />
                    <Text variant="bodyLarge" style={styles.fieldTypeText}>TEXT</Text>
                    <IconButton
                        icon="camera"
                        iconColor={colours.black}
                        size={20}
                        onPress={() => console.log('Pressed')}
                    />
                </View>
                <Button mode="contained" onPress={() => console.log('Pressed')} >
                    Title Filed:
                </Button>
                <DropdownButton />
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