import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CommonStyles } from '../../common/Styles';
import CustomCheckBox from '../../Component/CustomCheckBox';
import CustomDatePicker from '../../Component/CustomDatePicker';
import CustomDropDown from '../../Component/CustomDropDown';
import CustomTextInput from '../../Component/CustomTextInput';
import moment from 'moment';
import { connect } from 'react-redux';
import { onRegUser } from '../../redux/actions';
import Loading from '../../common/Loading';
import ErrorMasg from '../../Component/ErrorMsg';


const RegistartionForm = (props) => {
    const [cName, setcName] = useState('')
    const [cMobile, setcMobile] = useState('')
    const [model, setModal] = useState('')
    const [zipCode, setZipCode] = useState('')
    const [stateName, setStateName] = useState('')
    const [batteryNo, setBatteryNo] = useState('')
    const [chasisNo, setChasisNo] = useState('')
    const [selectedIndex, setSelectedIndex] = useState()
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('')
    const [selectedDate, setPickedDate] = useState(moment(new Date()).format('DD-MMM-YYYY'));


    const setPickedDateFun = (item) => {
        setPickedDate(moment(item).format('DD-MMM-YYYY'))
    }

    const onClickCheckBox = (id) => {
        setSelectedIndex(id)
    }

    const onSelectDropDownValue = (index, item) => {
        setSelectedDropDownValue(item)
    }

    const onSubmit = () => {
        if (!(cName && cMobile && model && zipCode && stateName && batteryNo && chasisNo && selectedDropDownValue)) {
            alert('Please fill all mandatory fields.')
        }
        else {
            props.onRegUser({ cName, cMobile, model, zipCode, stateName, batteryNo, chasisNo, selectedIndex, selectedDate, selectedDropDownValue })
            clearState();
        }
    }

    const clearState = () => {
        setcName('')
        setcMobile('')
        setModal('')
        setZipCode('')
        setStateName('')
        setBatteryNo('')
        setChasisNo('')
        setSelectedIndex()
        setSelectedDropDownValue('')
        setPickedDate(moment(new Date()).format('DD-MMM-YYYY'))
    };

    return (
        <View style={CommonStyles.contianer}>

            <Text style={CommonStyles.headerStyle}>
                {'WARRANTY REGISTRATION'}
            </Text>

            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
            >

                <CustomTextInput
                    header={'Customer Name*'}
                    value={cName}
                    maxLength={25}
                    onChange={setcName}
                />
                {(cName.length == 0) ? <ErrorMasg errorMsg={'Please enter Customer Name'} /> : null}

                <CustomTextInput
                    header={'Customer Mobile*'}
                    value={cMobile}
                    maxLength={10}
                    onChange={setcMobile}
                />
                {(cMobile.length < 10) ? <ErrorMasg errorMsg={'Please enter Customer Mobile no'} /> : null}

                <CustomTextInput
                    header={'Model Purchased*'}
                    value={model}
                    maxLength={25}
                    onChange={setModal}
                />
                {(model.length == 0) ? <ErrorMasg errorMsg={'Please enter Model'} /> : null}

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            header={'Pin Code*'}
                            styles={{ flex: 1 }}
                            value={zipCode}
                            maxLength={6}
                            onChange={setZipCode}
                        />
                        {(zipCode.length < 6) ? <ErrorMasg errorMsg={'Please enter Pin Code'} /> : null}
                    </View>

                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            header={'State*'}
                            styles={{ flex: 1 }}
                            value={stateName}
                            maxLength={25}
                            onChange={setStateName}
                        />
                        {(stateName.length == 0) ? <ErrorMasg errorMsg={'Please enter State Name'} /> : null}
                    </View>
                </View>

                <CustomDatePicker
                    header={'Dtae of Invoice*'}
                    selectedDate={selectedDate}
                    setPickedDateFun={setPickedDateFun}
                />

                <CustomTextInput
                    header={'Battery No*'}
                    value={batteryNo}
                    maxLength={25}
                    onChange={setBatteryNo}
                />
                {(batteryNo.length == 0) ? <ErrorMasg errorMsg={'Please enter Battery No'} /> : null}

                <CustomTextInput
                    header={'Chassis No*'}
                    value={chasisNo}
                    maxLength={25}
                    onChange={setChasisNo}
                />
                {(chasisNo.length == 0) ? <ErrorMasg errorMsg={'Please enter Chassis No'} /> : null}


                <CustomDropDown
                    onSelectDropDownValue={onSelectDropDownValue}
                />

                <CustomCheckBox
                    onClickCheckBox={onClickCheckBox}
                    selectedIndex={selectedIndex}
                />

                <TouchableOpacity
                    onPress={() => onSubmit()}
                    style={CommonStyles.buttonStyle}
                >
                    <Text style={CommonStyles.buttonTextStyle}>
                        {'SUBMIT'}
                    </Text>
                </TouchableOpacity>

                <Loading />
            </KeyboardAwareScrollView >
        </View>
    )
}

const mapDispatchToProps = {
    onRegUser: onRegUser,
};

export default connect(null, mapDispatchToProps)(RegistartionForm);