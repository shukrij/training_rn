import React from 'react';
import { StyleSheet } from 'react-native';

const defaultTitle = {
    fontSize: 30,
    color: '#4d4d4d',
    marginStart: 10,
};

export const textInputStyle = StyleSheet.create({
    title: defaultTitle,
    title2: {
        ...defaultTitle,
        color: '#C70039',
    },
    
});