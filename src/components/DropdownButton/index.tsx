import React, { useState } from 'react';
import { Menu, Divider, Provider, Button } from 'react-native-paper';
import { View, } from 'react-native';
import DropDown from 'react-native-paper-dropdown';

const DropdownButton = ({ onSelectItem }) => {
    const [visible, setVisible] = useState(false);
    const [gender, setGender] = useState();

    const dropdownOptions = [
        { label: 'Text', value: 'text' },
        { label: 'Checkbox', value: 'checkbox' },
        { label: 'Number', value: 'number' },
        { label: 'Date', value: 'date' },
    ];

    const handleOnSelect = (value) => {
        onSelectItem(value);
    }

    return (
        <DropDown
            label="Add Field"
            mode="outlined"
            visible={visible}
            showDropDown={() => setVisible(true)}
            onDismiss={() => setVisible(false)}
            value={"Add Field"}
            setValue={handleOnSelect}
            list={dropdownOptions}
        />
    );
};

export default DropdownButton;
