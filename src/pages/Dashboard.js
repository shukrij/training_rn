import React, {useState} from 'react';
import { TouchableOpacity, SafeAreaView, View, Text } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import {textInputStyle, formInputStyle} from '../styles';

export const Dashboard = () => {

  const navigation = useNavigation();
  const route = useRoute();
  console.log(route);
  const {name, age} = route.params;

  const [nameText, setNameText] = useState('')
    const textUpdate = (text) => {
      setNameText(text)
    }
  
    const [ageText, setAgeText] = useState('')
    const AgeUpdate = (text) => {
      setAgeText(text)
    }

    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={textInputStyle.title3}>Dashboard Name : {name} </Text>
            <Text style={textInputStyle.title3}>Age :  {age} years old</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('Next Page',{
                name:nameText,
                age: ageText
                })}
                style={formInputStyle.btn}>
                <Text style={textInputStyle.title}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    
    );
};