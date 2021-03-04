import React from 'react';
import { Text } from 'react-native';
import { CommonStyles } from '../common/Styles';


const ErrorMasg = (props) => {

    return (
        <Text style={CommonStyles.errorStyle}>
            {props.errorMsg}
        </Text>
    )
}

export default ErrorMasg;