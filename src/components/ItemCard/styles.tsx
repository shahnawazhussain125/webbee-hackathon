import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
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
    },
    footerContainer: {
        marginVertical: 5,
    }
});

export default styles;
