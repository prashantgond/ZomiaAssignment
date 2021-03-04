import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { CommonStyles } from '../common/Styles';


const CustomCheckBox = (props) => {
    const checkBoxDATA = [{ id: 1, header: 'Yes' }, { id: 2, header: 'No' }]

    return (
        <View style={{ height: 50, marginVertical: 15, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 6 }}>
                <Text style={CommonStyles.checkBoxHeaderStyle}>
                    {'Finance through Bajaj'}
                </Text>
            </View>

            <View style={{ flex: 4, flexDirection: 'row' }}>
                {checkBoxDATA.map((item) => {
                    return (
                        <TouchableOpacity
                            onPress={() => props.onClickCheckBox(item.id)}
                            style={{ flex: 1, flexDirection: 'row' }}
                        >
                            <Image
                                style={[CommonStyles.iconStyle, { tintColor: (item.id == props.selectedIndex) ? '#bf4932' : '#000' }]}
                                source={(item.id == props.selectedIndex) ? require('../assets/icons/checkbox.png') : require('../assets/icons/Uncheckbox.png')}
                            />
                            <Text style={{ paddingLeft: 5 }}>
                                {item.header}
                            </Text>
                        </TouchableOpacity>
                    )
                })}
            </View>
        </View>
    )
}

export default CustomCheckBox;