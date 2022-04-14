import React from 'react';
import { StyleSheet } from 'react-native';

const defaultTitle = {
    fontSize: 20,
    color: '#fff',
};

export const textInputStyle = StyleSheet.create({
    mainbg:{
        flex:1, 
        alignItems:'center',
        justifyContent:'center',
    },
    main:{
        height: '100%',
        width: '100%',
        backgroundColor:'gray',
    },
    logo:{
        // backgroundColor:'white',
        alignItems:'center',
        justifyContent:'flex-end',
    },
    title: defaultTitle,
    title2: {
        ...defaultTitle,
        color: '#000',
        fontSize: 15,
    },
    title3: {
        ...defaultTitle,
        color: '#000',
        fontSize: 20,
    },
    coverImage: {
        flex: 1,
        justifyContent: "center"
    },
    
});