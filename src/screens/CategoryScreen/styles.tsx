import { colours } from '@theme';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colours.white,
    },
    contentContainer: {
        // flex: 1,
        width: "100%",
        flexWrap: 'wrap',
        backgroundColor: "red",
    }
});

export default styles;
