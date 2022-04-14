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
          <View style={{flex:1,justifyContent:'center'}}>
            <Text style={textInputStyle.title3}>Name : {name} </Text>
            <Text style={textInputStyle.title3}>Age :  {age} years old</Text>
          </View>
        </SafeAreaView>
    
    );
};