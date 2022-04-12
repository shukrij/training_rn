import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput } from 'react-native';
import {textInputStyle, formInputStyle} from '../styles';
import { useNavigation } from '@react-navigation/native';
import { Title } from '../styles/testStyleComponent';

export const LandingPage = () => {

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
      <SafeAreaView style={formInputStyle.mainContainer}>
        <View style={formInputStyle.container}>
          <Title>Name : {nameText}</Title>
          <Text style={textInputStyle.title2}>Age : {ageText} y/o</Text>
          <TextInput
            placeholder="Name"
            onChangeText={textUpdate}
            style={formInputStyle.input}
          />
          <TextInput
            placeholder="Age"
            onChangeText={AgeUpdate}
            style={formInputStyle.input}
            keyboardType='numeric'
          />
          <Button
            title="Go To Next Page"
            color="#f194ff"
            onPress={() => navigation.navigate('Next Page',{
              name:nameText,
              age: ageText
            })}
        />
        </View>
      </SafeAreaView>
  
    );
  };
  