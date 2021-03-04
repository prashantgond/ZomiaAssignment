import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CommonStyles } from '../common/Styles';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const CustomDatePicker = (props) => {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        props.setPickedDateFun(date);
        hideDatePicker();
    };

    return (
        <View >
            <Text style={CommonStyles.textInputHeaderStyle}>
                {props.header}
            </Text>

            <TouchableOpacity
                style={[CommonStyles.textInputStyle, { justifyContent: 'center' }]}
                onPress={() => showDatePicker()}
            >
                <Text style={{ fontSize: 16, fontWeight: '400' }}>
                    {props.selectedDate}
                </Text>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    // date={selectedDate}
                    mode="date"
                    maximumDate={new Date()}
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CustomDatePicker;