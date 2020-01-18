import React, {useCallback, useState} from 'react';
import {Image, TextInput, TouchableOpacity, View, Text} from 'react-native';

import logo from '../assets/images/logo.png';

import api from '../store/api';

export default ({ navigation: { navigate } }) => 
{
  const [username, setUsername] = useState('');

  const onSubmit = useCallback( async () => { 
    const {
      data: {_id: id},
      data,
    } = await api.post('/devs', {username});

    console.log(data);

    navigate('main');
   }, [navigate, username]);

  return (
    <View style={{
      flex: 1,
      backgroundColor: '#f5f5f5',
      paddingHorizontal: 30,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Image source={logo} />
      <TextInput 
        autoCapitalize="none" 
        placeholder="Digite seu Usuário no GitHub"
        value={username}
        onChangeText={setUsername}
        style={{
            marginTop: 20,
            paddingHorizontal: 15,
            alignSelf: 'stretch',
            height: 45,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#ddd',
            borderRadius: 4,
          }}
      />
      <TouchableOpacity 
        onPress={onSubmit}
        style={{
          marginTop: 10,
          height: 45,
          alignSelf: 'stretch',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#DF4723',
          borderRadius: 4,
        }}>
          <Text 
            style={{
              color: '#fff',
              fontWeight: 'bold',
              fontSize: 16,
            }}>
              Sing In
          </Text>
      </TouchableOpacity>
    </View>
  );
}