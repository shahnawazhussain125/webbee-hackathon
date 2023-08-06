import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { categoriesSelector } from '../../redux/slices/appSlice';
import DashboardScreen from '../../screens/DashboardScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import MachineScreen from '../../screens/MachineScreen';
import { CategoryType, DrawerRoutes } from '@types';
import { useAppSelector } from '@hooks';

const Drawer = createDrawerNavigator<DrawerRoutes>();

const DrawerNavigator: React.FC = () => {
  const categories = useAppSelector(categoriesSelector);
  return (
    <Drawer.Navigator
      initialRouteName='Dashboard'
    >
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      {categories && categories.map((category: CategoryType) => (
        <Drawer.Screen
          key={category.id}
          name={category.title as keyof DrawerRoutes}
          component={MachineScreen}
          initialParams={{
            categoryId: category.id
          }}
        />
      ))}
      <Drawer.Screen name="Categories" component={CategoryScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
