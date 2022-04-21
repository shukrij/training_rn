import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { setBahasa, setEnglish } from '../../redux/settingSlice';
import {textInputStyle, formInputStyle} from '../../styles';

export const ListingPage = () => {
    const navigation = useNavigation();
    const itemsState = useSelector(state => state.items);

    const settingState = useSelector((state) => state.settings)
    const lang = settingState.language

  return (
    <ScrollView style={{flex:1}}>
      {itemsState.list.map((each, key) => (
        <View
          key={key}
          style={{
            margin: 10,
            marginBottom: 5,
            borderWidth: 1,
            borderColor: 'grey',
            padding: 5,
          }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('User Details',{
                    idx:each.idx
                })}
                style={formInputStyle.btnClear}>
                <Text>{key+1}. idx : {each.idx}</Text>
                <Text>{lang.firstName} : {each.first_name}</Text>
                <Text>{lang.lastName} : {each.last_name}</Text>
                <Text>{lang.email} : {each.email_value}</Text>
            </TouchableOpacity>
        </View>
        
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    borderRadius: 5,
    padding: 10,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
  },
});