import React from 'react';
import { StyleSheet } from 'react-native';

export const formInputStyle = StyleSheet.create({
    mainContainer: {
      flex: 1
    },
    container: {
      backgroundColor: '#DAF7A6',
      flex: 1,
    },
    input: {
        height: 50,
        borderColor: 'red',
        borderWidth: 1,
        padding:10,
        margin:10,
        borderRadius:10,
    }
});