import React from 'react';
import {RouterConfigOptions} from '@react-navigation/native';

export interface Screen<Props = {}> extends React.FC<ScreenProps & Props> {
  options?:
    | RouterConfigOptions
    | ((props: ScreenProps & Props) => RouterConfigOptions);
}

export interface ScreenProps {
  navigation: any;
  route: any;
}
