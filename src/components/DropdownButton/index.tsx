import React, { useState } from 'react';
import DropDown from 'react-native-paper-dropdown';

const DropdownButton = ({ title, onSelectItem, dropdownOptions }) => {
    const [visible, setVisible] = useState(false);

    const handleOnSelect = (value) => {
        onSelectItem(value);
    }

    return (
        <DropDown
            label={title}
            mode="outlined"
            visible={visible}
            showDropDown={() => setVisible(true)}
            onDismiss={() => setVisible(false)}
            value={title}
            setValue={handleOnSelect}
            list={dropdownOptions}
        />
    );
};

export default DropdownButton;
