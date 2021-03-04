import React from 'react';
import { View, Text, Image } from 'react-native';
import { CommonStyles } from '../common/Styles';
import ModalDropdown from 'react-native-modal-dropdown';

const CustomDropDown = (props) => {

    return (
        <View >
            <Text style={CommonStyles.textInputHeaderStyle}>
                {'Model Color*'}
            </Text>

            <View style={{ flexDirection: 'row' }}>
                <ModalDropdown
                    options={['Green', 'Blue', 'yellow', 'Red']}
                    defaultValue={'Select Color'}
                    style={[CommonStyles.textInputStyle, { flex: 1, justifyContent: 'center' }]}
                    dropdownStyle={{ width: '85%' }}
                    textStyle={{ fontSize: 16, fontWeight: '500' }}
                    dropdownTextStyle={{ fontSize: 16, fontWeight: '500' }}
                    onSelect={(index, item) => props.onSelectDropDownValue(index, item)}
                />
                <Image
                    style={{ height: 25, width: 25, position: 'absolute', right: 30, top: 15, tintColor: '#bf4932' }}
                    source={require('../assets/icons/down_arrow.png')}
                />

            </View>
        </View>
    )
}

export default CustomDropDown;