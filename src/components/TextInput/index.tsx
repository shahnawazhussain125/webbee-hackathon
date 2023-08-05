import React from 'react';
import { TextInput as PaperTextInput, TextInputProps } from 'react-native-paper';
import styles from './styles';

const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <PaperTextInput
            {...props}
            mode="outlined"
            style={[props?.style, styles.textInput]}
        />
    )
}

export default TextInput;