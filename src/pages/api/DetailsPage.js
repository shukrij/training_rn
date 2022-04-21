import React, { useState, useEffect }  from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator, Image } from 'react-native';
import {textInputStyle, formInputStyle} from '../../styles';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux'
import { setBahasa, setEnglish } from '../../redux/settingSlice';
import { Title } from '../../styles/testStyleComponent'
import {deleteItem} from '../../redux/itemsSlice'

export const DetailsPage = () => {

    const settingState = useSelector((state) => state.settings)
    const lang = settingState.language
    const dispatch = useDispatch()
    const navigation = useNavigation();
    const route = useRoute();
    console.log(route);

    // destruct
    const {idx} = route.params;

    
    const [isLoading, setIsLoading] = useState(false)

    const [itemDetails, setItemDetails] = useState({
        idx: idx,
        first_name: '-',
        last_name: '-',
        email_value: '-',
    });

    const deleteItemAPI = () => {
        axios
            .get(
            `https://dev-msid.posdigicert.com.my/APIEX/test_delete_data/${idx}`,
            {
                headers: {
                Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
                },
            },
            )
            .then(res => {
            console.log('res delete: ', res.data);

            dispatch(deleteItem(idx));

            Alert.alert('Success', 'Delete Success', [
                {
                text: 'OK',
                onPress: () => navigation.goBack(),
                }
            ])
            })
            .catch(err => {
            console.log('err: ', err);
            });
    };

    //console.log(route);
    const callGetDetailsApi= () => {
        axios
        .get(`https://dev-msid.posdigicert.com.my/APIEX/test_get_specific_data/${idx}`, {
            headers: {
            Token: 'Basic a3JpZGVudGlhOlBhc3N3MHJkMjAxOQ==',
            },
        })
        .then(res => {
            console.log("Res get data :", res.data);
            //dispatch(setListState(res.data.data));
            setItemDetails({...itemDetails, ...res.data});

            setTimeout(() => {
            setIsLoading(false);
            }, 2000);
        })
        .catch(err => {
            console.log('err: ', err);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        // Func here
        callGetDetailsApi()
    }, [])

  return (
    
    isLoading?
    <View style={textInputStyle.mainbg}>
        <ActivityIndicator size="large" color="#0000ff">
        </ActivityIndicator>
        <Text>Submitting, please wait...</Text>
    </View>
    :

    <SafeAreaView style={textInputStyle.addForm}>
        <Title>Please make sure all your information are correct. {idx}</Title>
        {/* first name */}
        <Text style={{marginBottom:8}}>{lang.firstName}</Text>
        <TextInput
          value={itemDetails.first_name}
          placeholder={lang.plchdrFirstName}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'first_name')}
        />
        {/* last name */}
        <Text style={{marginTop:12, marginBottom:8}}>{lang.lastName}</Text>
        <TextInput
          value={itemDetails.last_name}
          placeholder={lang.plchdrLastName}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'last_name')}
        />
        {/* email */}
        <Text style={{marginTop:12, marginBottom:8}}>{lang.email}</Text>
        <TextInput
          value={itemDetails.email_value}
          placeholder={lang.plchdrEmail}
          style={formInputStyle.input}
          onChangeText={value => updateFromInput(value, 'email_value')}
        />
        <TouchableOpacity
            style={formInputStyle.btn}>
            <Text style={textInputStyle.title}>{lang.btnUpd}</Text>
            <Image
                source={require('../../assets/img/btn-save.png')}
                style={{
                    height: 24,
                    width: 24,
                    resizeMode: 'contain',
                    marginLeft: 5,
                }}
            />
        </TouchableOpacity>
        <TouchableOpacity
            style={formInputStyle.btn}
            onPress={deleteItemAPI}
        >
            <Text style={textInputStyle.title}>{lang.btnDel}</Text>
            <Image
                source={require('../../assets/img/btn-del.png')}
                style={{
                    height: 24,
                    width: 24,
                    resizeMode: 'contain',
                    marginLeft: 5,
                }}
            />
        </TouchableOpacity>
    </SafeAreaView>
    
    );
};