import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DrawerNavigator from '../DrawerNavigator';
import { MainRoutes } from '@types';

const MainStack = createStackNavigator<MainRoutes>();

const MainNavigator = () => {
    return (
        <MainStack.Navigator screenOptions={{ headerShown: false }}>
            <MainStack.Screen name="Drawer" component={DrawerNavigator} />
        </MainStack.Navigator>
    )
}

export default MainNavigator