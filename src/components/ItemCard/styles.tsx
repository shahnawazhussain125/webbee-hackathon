import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        // width: 100,
        borderRadius: 8,
        margin: 10
    },
    contentContainer: {

    },
    titleText: {
        fontSize: 16,
        fontWeight: "bold"
    },
    rowContainer: {
        width: 400,
        flexDirection: "row",
        alignItems: "center",
    },
    fieldTypeText: {
        color: colours.pink,
    }
});

export default styles;
