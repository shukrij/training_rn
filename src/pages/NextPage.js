import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

export const NextPage = () => {
    return (
        <SafeAreaView style={{flex:1, alignItems:'center'}}>
          <View style={{flex:1,justifyContent:'space-around',}}>
            <Text>Hello Next Page</Text>
          </View>
        </SafeAreaView>
    
    );
};