import {RouteProp, CompositeNavigationProp} from '@react-navigation/native';
import {DrawerNavigationProp} from '@react-navigation/drawer';
import {StackNavigationProp} from '@react-navigation/stack';

export interface MainRoutesProps<RouteName extends keyof MainRoutes> {
  navigation: CompositeNavigationProp<
    StackNavigationProp<MainRoutes, RouteName>,
    DrawerNavigationProp<DrawerRoutes, 'Dashboard'>
  >;
  route: RouteProp<MainRoutes, RouteName>;
}

export interface DrawerNavigationProps<RouteName extends keyof DrawerRoutes> {
  navigation: DrawerNavigationProp<DrawerRoutes, RouteName>;
  route: RouteProp<DrawerRoutes, RouteName>;
}

export type MainRoutes = {
  Drawer: undefined;
};

export type DrawerRoutes = {
  Dashboard: undefined;
  Categories: undefined;
  Machines: undefined;
};
