import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { categoriesSelector } from '../../redux/slices/appSlice';
import DashboardScreen from '../../screens/DashboardScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import MachineScreen from '../../screens/MachineScreen';
import { useSelector } from 'react-redux';
import { DrawerRoutes } from '@types';

const Drawer = createDrawerNavigator<DrawerRoutes>();

const DrawerNavigator = () => {
  const categories = useSelector(categoriesSelector);
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {
        categories && categories.map((category) => {
          return <Drawer.Screen
            key={category.id}
            name={category.title}
            component={MachineScreen} initialParams={{
              categoryId: category.id
            }} />
        })
      }
      <Drawer.Screen name="Categories" component={CategoryScreen} />

    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
