import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import {textInputStyle} from '../styles';

export const NextPage = () => {

  const route = useRoute();
  console.log(route);
  const {name, age} = route.params;

    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
          <View style={{flex:1,justifyContent:'space-around'}}>
            <Text style={textInputStyle.title2}>Hello {name} and I am {age} years old</Text>
          </View>
        </SafeAreaView>
    
    );
};