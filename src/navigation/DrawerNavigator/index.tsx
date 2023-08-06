import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { categoriesSelector } from '../../redux/slices/categorySlice';
import DashboardScreen from '../../screens/DashboardScreen';
import CategoryScreen from '../../screens/CategoryScreen';
import ItemScreen from '../../screens/ItemScreen';
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
          name={category.id as keyof DrawerRoutes}
          component={ItemScreen}
          initialParams={{
            categoryId: category.id,
          }}
          options={{
            title: category.title,
          }}
        />
      ))}
      <Drawer.Screen name="Categories" component={CategoryScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
