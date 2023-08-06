import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: 340,
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 18,
        color: colours.black,
        marginLeft: 10,
    }
});

export default styles;
