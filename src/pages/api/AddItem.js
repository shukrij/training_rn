import React, { useState }  from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import {textInputStyle, formInputStyle} from '../../styles';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export const AddItem = () => {
    const navigation = useNavigation();

    // const [nameText, setNameText] = useState('')
    // const textUpdate = (text) => {
    //   setNameText(text)
    // }
    // const [ageText, setAgeText] = useState('')
    // const AgeUpdate = (text) => {
    //   setAgeText(text)
    // }

    onButtonPress = () => {
        //navigation.navigate('Next Page')
        navigation.navigate('Dashboard',{
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
                        onPress: () => console.log("Cancel Pressed"),
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
                        onPress:() => {onButtonPress} 
                    }
                ]
            );
        })
    }

  //console.log(route);

  return (
    
    isLoading?
    <View style={textInputStyle.mainbg}>
        <ActivityIndicator size="large" color="#0000ff">
        </ActivityIndicator>
        <Text>Submitting, please wait...</Text>
    </View>
    :

    <SafeAreaView style={textInputStyle.addForm}>
        {/* first name */}
        <Text style={{marginBottom:8}}>First Name</Text>
        <TextInput
          value={addForm.first_name}
          placeholder="Enter First Name..."
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'first_name')}
        />
        {/* last name */}
        <Text style={{marginTop:12, marginBottom:8}}>Last Name</Text>
        <TextInput
          value={addForm.last_name}
          placeholder="Enter Last Name..."
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'last_name')}
        />
        {/* email */}
        <Text style={{marginTop:12, marginBottom:8}}>Email</Text>
        <TextInput
          value={addForm.email_value}
          placeholder="Enter Email..."
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'email_value')}
        />
        <TouchableOpacity
            onPress={addItemApi}
            style={formInputStyle.btn}>
            <Text style={textInputStyle.title}>Submit</Text>
        </TouchableOpacity>
    </SafeAreaView>
    
    );
};