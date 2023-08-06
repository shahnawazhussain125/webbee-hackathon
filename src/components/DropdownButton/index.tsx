import React, { useState } from 'react';
import { View } from 'react-native';
import DropDown from 'react-native-paper-dropdown';
import styles from './styles';

interface DropdownButtonProps {
    title: string;
    onSelectItem: (value: string) => void;
    options: { label: string, value: string }[];
}

const DropdownButton = ({ title, onSelectItem, options }: DropdownButtonProps) => {
    const [visible, setVisible] = useState(false);

    const handleOnSelect = (value: string) => {
        if (onSelectItem) {
            onSelectItem(value);
        }
    }

    return (
        <View style={styles.container}>
            <DropDown
                label={title}
                mode="outlined"
                visible={visible}
                showDropDown={() => setVisible(true)}
                onDismiss={() => setVisible(false)}
                value={title}
                setValue={handleOnSelect}
                list={options}

            />
        </View>
    );
};

export default DropdownButton;
