import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colours.white,
    },
    contentContainer: {
        width: "100%",
        flexWrap: 'wrap',
        marginVertical: 20,
    },
    footerContainer: {
        height: 100,
        paddingHorizontal: 20,
        justifyContent: "center"
    }
});

export default styles;
