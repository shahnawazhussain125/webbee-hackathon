import * as React from 'react';
import { View } from 'react-native';
import { Switch, Text } from 'react-native-paper';
import styles from './styles';

interface SwitchButtonProps {
    title: string;
    value: boolean;
    onChangeValue: (value: boolean) => void;
}


const SwitchButton = ({ title, value, onChangeValue }: SwitchButtonProps) => {
    const handleOnChangeValue = (value: boolean) => {
        if (onChangeValue) {
            onChangeValue(value);
        }
    };

    return (
        <View style={styles.container}>
            <Switch value={value} onValueChange={handleOnChangeValue} />
            <Text style={styles.titleText}>{title}</Text>
        </View>
    );
};

export default SwitchButton;