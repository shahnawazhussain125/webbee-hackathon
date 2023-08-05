import React from 'react';
import { View } from 'react-native';
import CategoryCard from "../../components/CategoryCard"
import styles from './styles';

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CategoryScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {
                    categories.map((item, index) => (
                        <CategoryCard key={index} />
                    ))
                }
            </View>
        </View>
    )
}

export default CategoryScreen;