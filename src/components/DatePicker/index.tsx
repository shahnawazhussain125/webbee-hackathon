import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import TextInput from "../TextInput";

interface DatePickerProps {
    title: string;
    value: string;
    onChangeDate: (date: string) => void;
}

const DatePicker = ({ title, value, onChangeDate }: DatePickerProps) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date: Date) => {
        onChangeDate(date.toDateString())
        hideDatePicker();
    };

    return (
        <View >
            <TouchableOpacity onPress={showDatePicker}>
                <TextInput
                    mode="outlined"
                    label={title}
                    placeholder={title}
                    value={value}
                    pointerEvents="none"

                />
            </TouchableOpacity>


            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />
        </View>
    );
};

export default DatePicker;