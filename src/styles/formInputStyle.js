import React from 'react';
import { StyleSheet } from 'react-native';

export const formInputStyle = StyleSheet.create({
    mainContainer: {
      flex: 1,
    },
    container: {
      backgroundColor: '#F9DBEE',
      flex: 1,
      alignItems:'center',
      marginTop:35,
    },
    input: {
        height: 40,
        // borderColor: 'black',
        // borderWidth: 1,
        padding:2,
        margin:2,
        borderRadius:10,
        width: '100%',
        backgroundColor: '#F0EDEF',
        textAlign: 'center',
        borderColor:'#DFDEDE',
        borderWidth:1
    },
    btn:{
      width: 350,
      height:50,
      backgroundColor:'#15aae1',
      textAlign:'center',
      borderRadius:10,
      alignItems:'center',
      justifyContent:'center',
      marginTop:10,
      marginBottom:10,
    },
});