import React, { useState } from 'react';
import { Menu, Divider, Provider, Button } from 'react-native-paper';
import { View, } from 'react-native';

const DropdownButton = () => {
    const [visible, setVisible] = useState(true);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);

    const dropdownOptions = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },

    ];

    return (
        <View style={{ padding: 16 }}>
            <Provider>
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={<Button mode="contained" onPress={openMenu}>Open Dropdown</Button>}
                >
                    {dropdownOptions.map((option) => (
                        <Menu.Item key={option.value} onPress={() => closeMenu()} title={option.label} />
                    ))}
                    <Divider />
                    <Menu.Item onPress={() => closeMenu()} title="Cancel" />
                </Menu>
            </Provider>
        </View>
    );
};

export default DropdownButton;
