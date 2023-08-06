import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { categoriesSelector } from '../../../redux/slices/appSlice';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import styles from './styles';

const DrawerContent = props => {
  const categories = useSelector(categoriesSelector);

  console.log("categories", categories);
  const routes = [
    {
      id: 'D-001',
      name: 'Dashboard',
      routeName: 'Dashboard',
    },
    ...categories?.map((item, index) => {
      return {
        id: `D-${index + 2}`,
        name: item.title,
        routeName: 'Machines',
        params: {
          categoryId: item.id,
        },
      }
    }),
    {
      id: 'D-003',
      name: 'Categories Managment',
      routeName: 'Categories',
    },
  ];

  const handleOnPress = (routeName, params) => {
    if (params) {
      return props.navigation.navigate(routeName, params);
    }

    return props.navigation.navigate(routeName);
  };

  return (
    <DrawerContentScrollView
      style={styles.container}
    >
      <View style={styles.routeItemContainer}>
        {routes.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => handleOnPress(item.routeName, item.params)}
              style={styles.routeNameContainer}
            >
              <Text style={styles.routeNameText}>{item.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </DrawerContentScrollView>
  );
};
export default DrawerContent;
