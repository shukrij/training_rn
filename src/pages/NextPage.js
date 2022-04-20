import React, { useState }  from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {textInputStyle, formInputStyle} from '../styles';
import { Title } from '../styles/testStyleComponent';

export const NextPage = () => {

  const route = useRoute();
  console.log(route);

  const [nameText, setNameText] = useState('')
  const [toDoList, setToDoList] = useState([])

  const textUpdate = (text) => {
    setNameText(text)
  }

  const appendTodo = () => {
    const cloneArr = [...toDoList]
    cloneArr.push(nameText)
    setToDoList(cloneArr)
    setNameText('')
  }

    return (
    <SafeAreaView style={textInputStyle.mainbg}>
      <Title>To Do List : {nameText}</Title>
      <TextInput
          placeholder="Add Your To Do List"
          onChangeText={textUpdate}
          style={formInputStyle.input}
          value={nameText}
      />
      <TouchableOpacity
        onPress={appendTodo}
        style={formInputStyle.btn}>
          <Text style={textInputStyle.title}>Add Item</Text>
      </TouchableOpacity>
      <Title style={textInputStyle.headerToDo}>My To Do List:</Title>
        {toDoList.map((item, key) => (
          <View key={key} style={textInputStyle.listToDo}>
            <Text>
              <Text>{key+1}.  </Text>
            {item}
            </Text>

          </View>
        )
        )}
    </SafeAreaView>
    
    );
};