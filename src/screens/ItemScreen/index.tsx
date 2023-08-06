import React from 'react';
import { View } from 'react-native';
import { categoriesSelector } from '../../redux/slices/categorySlice';
import CategoryItems from '../../components/CategoryItems';
import { RouteProp } from '@react-navigation/native';
import { useAppSelector } from '@hooks';
import { CategoryType } from '@types';
import styles from './styles';

type ItemScreenProps = {
    route: RouteProp<{ params: { categoryId: string } }, 'params'>;
};

const ItemScreen = (props: ItemScreenProps) => {
    const { categoryId } = props.route.params;
    const categories = useAppSelector(categoriesSelector);

    return (
        <View style={styles.container}>
            <CategoryItems category={categories.find((category: CategoryType) => category.id === categoryId)} />
        </View>
    )
}

export default ItemScreen;