import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { CommonStyles } from '../common/Styles';


const CustomTextInput = (props) => {
    return (
        <View style={props.styles}>
            <Text style={CommonStyles.textInputHeaderStyle}>
                {props.header}
            </Text>
            <TextInput
                placeholder={''}
                style={CommonStyles.textInputStyle}
                value={props.value}
                onChangeText={(item) => props.onChange(item, props.header)}
                // returnKeyType={'done'}
                maxLength={props.maxLength}
                keyboardType={(props.maxLength == 10 || props.maxLength == 6) ? 'number-pad' : 'default'}
            />
        </View>
    )
}

export default CustomTextInput;