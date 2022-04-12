import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';
import {textInputStyle, formInputStyle} from '../styles'

export const LandingPage = () => {

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
          <Text style={textInputStyle.title}>Name : {nameText}</Text>
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
        </View>
      </SafeAreaView>
  
    );
  };
  