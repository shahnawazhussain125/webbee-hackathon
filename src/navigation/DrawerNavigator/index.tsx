import React from 'react';
// import DrawerContent from '../../components/DrawerComponents/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from '../../screens/DashboardScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import MachineScreen from '../../screens/MachineScreen';
import { StyleSheet } from 'react-native';
import { DrawerRoutes } from '@types';
import { colours } from '@theme';
import { vw } from '@utils';

const Drawer = createDrawerNavigator<DrawerRoutes>();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={props => ({
        drawerStyle: styles.drawerStyle,
      })}
    // drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Categories" component={CategoryScreen} />
      <Drawer.Screen name="Machines" component={MachineScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  drawerStyle: {
    // width: vw * 70,
    // backgroundColor: colours.black,
  },
});
