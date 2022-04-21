import React, { useState, useEffect }  from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {textInputStyle, formInputStyle} from '../../styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { setBahasa, setEnglish } from '../../redux/settingSlice';
import { Title } from '../../styles/testStyleComponent'
import {setListState} from '../../redux/itemsSlice'

export const AddItem = () => {

    const settingState = useSelector((state) => state.settings)
    const lang = settingState.language
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const onButtonPress = () => {
        //navigation.navigate('Next Page')
        navigation.navigate('Register New User',{
            name:'Ahmad',
            age: '12'
        })
    }
    const onButtonPressNo = () => {
        //navigation.navigate('Next Page')
        navigation.navigate('Listing User',{
            name:'Ahmad',
            age: '12'
        })
    }
    
    const [isLoading, setIsLoading] = useState(false)

    const [addForm, setAddForm] = useState({
        first_name:'',
        last_name: '',
        email_value:''
    })

    const updateFromInput = (value, state) => {
        const cloneState = {...addForm}
        cloneState[state] = value
        setAddForm(cloneState)
    }

    const addItemApi = () => {

        setIsLoading(true)

        var formBody = [];
            for (var property in addForm) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(addForm[property]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
        formBody = formBody.join('&');

            
        axios.post('https://dev-msid.posdigicert.com.my/APIEX/test_add_new', formBody, {
            headers:{
                'Token':'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
                //'Token':'Basic 123141==',
                'Content-Type':'application/x-www-form-urlencoded',
            }
        }).then(res => {
            
            setTimeout(()=> {
                setIsLoading(false)
            }, 2000)
            
            //console.log('res: ', res.data)
            Alert.alert(
                "User Registration Submitted",
                "Continue add new user?",
                [
                    {
                        text: "No",
                        //onPress: () => console.log("Cancel Pressed"),
                        onPress: onButtonPressNo,
                        style: "cancel"
                    },
                    { 
                    text: "Yes", 
                    onPress: onButtonPress
                    }
                ]
            );
        }).catch(err => {
            
            setTimeout(()=> {
                setIsLoading(false)
            }, 2000)

            //console.log('err: ', err)
            Alert.alert(
                "Data Not Submit",
                "User Registration Failed, Retried?",
                [
                    {
                        text: "No",
                        onPress: () => console.log("No Pressed"),
                        style: "cancel"
                    },
                    { 
                        text: "Yes", 
                        //onPress: () => console.log("Alert OK Pressed")
                        //onPress:() => onButtonPress
                    }
                ]
            );
        })
    }

    //console.log(route);
    const callGetListAPI = () => {
        axios
        .get('https://dev-msid.posdigicert.com.my/APIEX/test_get_all_data/1', {
            headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            },
        })
        .then(res => {
            console.log("Value :", res.data.data);
            dispatch(setListState(res.data.data));

            setTimeout(() => {
            setIsLoading(false);
            }, 2000);
        })
        .catch(err => {
            console.log('err: ', err);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        // Func here
        callGetListAPI()
    }, [])

  return (
    
    isLoading?
    <View style={textInputStyle.mainbg}>
        <ActivityIndicator size="large" color="#0000ff">
        </ActivityIndicator>
        <Text>Submitting, please wait...</Text>
    </View>
    :

    <SafeAreaView style={textInputStyle.addForm}>
        <Title>Please fill in all item below</Title>
        {/* first name */}
        <Text style={{marginBottom:8}}>{lang.firstName}</Text>
        <TextInput
          value={addForm.first_name}
          placeholder={lang.plchdrFirstName}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'first_name')}
        />
        {/* last name */}
        <Text style={{marginTop:12, marginBottom:8}}>{lang.lastName}</Text>
        <TextInput
          value={addForm.last_name}
          placeholder={lang.plchdrLastName}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'last_name')}
        />
        {/* email */}
        <Text style={{marginTop:12, marginBottom:8}}>{lang.email}</Text>
        <TextInput
          value={addForm.email_value}
          placeholder={lang.plchdrEmail}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'email_value')}
        />
        <TouchableOpacity
            onPress={addItemApi}
            style={formInputStyle.btn}>
            <Text style={textInputStyle.title}>{lang.btnSubmit}</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
            onPress={() => dispatch(setEnglish())}
            style={formInputStyle.btnLang}>
            <Text>EN</Text>
        </TouchableOpacity>

        <TouchableOpacity
            onPress={() => dispatch(setBahasa())}
            style={formInputStyle.btnLang}>
            <Text>BM</Text>
        </TouchableOpacity> */}
        <View style={{ 
            flexDirection:"row", 
            padding:5,
            justifyContent:'center'}}>
            <Text style={textInputStyle.title2} onPress={() => dispatch(setBahasa())}> 
                BM
            </Text>  
            <Text style={textInputStyle.title2}> | </Text> 
            <Text style={textInputStyle.title2} onPress={() => dispatch(setEnglish())}> 
                ENG
            </Text> 
        </View>
        <View style={{ 
            flexDirection:"row", 
            padding:5,
            justifyContent:'center'}}>
            <Text style={textInputStyle.title2} onPress={() => navigation.navigate('Listing User')}> 
                View All
            </Text>
        </View>
    </SafeAreaView>
    
    );
};