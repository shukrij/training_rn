import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, View, Text, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import {textInputStyle, formInputStyle} from '../styles';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../styles/testStyleComponent';


export const LandingPage = () => {
    const imageCover = { uri: "https://img.theculturetrip.com/x/wp-content/uploads/2019/04/ia_0618_kuala-lumpur_elora-pautrat.jpg" };
    const navigation = useNavigation();
    const [nameText, setNameText] = useState('')
    const textUpdate = (text) => {
      setNameText(text)
    }
  
    const [ageText, setAgeText] = useState('')
    const AgeUpdate = (text) => {
      setAgeText(text)
    }
  
    return (
      <ImageBackground source={imageCover} resizeMode="cover" style={textInputStyle.coverImage}>
      <SafeAreaView style={textInputStyle.mainbg}>
        <View style={textInputStyle.logo}>
          <Image source={require('../assets/img/logo.png')}
            style={{width: 290, height: 350}} />
        </View>
        <TextInput
            placeholder="Enter your email"
            onChangeText={textUpdate}
            style={formInputStyle.input}
        />
        <TextInput
            placeholder="Enter your password"
            onChangeText={AgeUpdate}
            style={formInputStyle.input}
            keyboardType='numeric'
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Dashboard',{
            name:nameText,
            age: ageText
          })}
          style={formInputStyle.btn}>
            <Text style={textInputStyle.title}>LOGIN</Text>
        </TouchableOpacity>
        <Text style={textInputStyle.title2}>Forgot Password | Register</Text> 
          
        {/* <View style={formInputStyle.container}>
          <Title>Name : {nameText}</Title>
          <Text style={textInputStyle.title2}>Age : {ageText} y/o</Text>
          <TextInput
            placeholder="Please enter your name"
            onChangeText={textUpdate}
            style={formInputStyle.input}
          />
          <TextInput
            placeholder="Please enter your age"
            onChangeText={AgeUpdate}
            style={formInputStyle.input}
            keyboardType='numeric'
          />
          <Button
            title="LOGIN"
            color="#f194ff"
            onPress={() => navigation.navigate('Next Page',{
              name:nameText,
              age: ageText
            })}
        />
        </View> */}
      </SafeAreaView>
      </ImageBackground>
    );
  };
  