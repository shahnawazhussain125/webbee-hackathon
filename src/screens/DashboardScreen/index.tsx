import React from 'react';
import { ScrollView, View } from 'react-native';
import { categoriesSelector } from '../../redux/slices/categorySlice';
import CategoryItems from '../../components/CategoryItems';
import { useAppSelector } from '@hooks';
import styles from './styles';

const DashboardScreen = () => {
    const categories = useAppSelector(categoriesSelector);

    return (
        <View style={styles.container}>
            <ScrollView>
                {
                    categories.map((category) => (
                        <CategoryItems category={category} />
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default DashboardScreen