import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.white,
    },
    headerContainer: {
        padding: 10,
        marginVertical: 10,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: colours.gray,
        borderRadius: 10,
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default styles;
