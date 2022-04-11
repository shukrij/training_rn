import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, TextInput } from 'react-native';


export const App = () => {

  const [nameText, setNameText] = useState('')
  const textUpdate = (text) => {
    setNameText(text)
  }

  const [ageText, setAgeText] = useState('')
  const AgeUpdate = (text) => {
    setAgeText(text)
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>My Name : {nameText}</Text>
        <Text style={styles.title}>My Age : {ageText} y/o</Text>
        <TextInput
          placeholder="Name"
          onChangeText={textUpdate}
          style={styles.input}
        />
        <TextInput
          placeholder="Age"
          onChangeText={AgeUpdate}
          style={styles.input}
          keyboardType='numeric'
        />
      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  container: {
    backgroundColor: 'skyblue',
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: '#4d4d4d',
    marginStart: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  }
});