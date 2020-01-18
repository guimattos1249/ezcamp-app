import React from 'react';
import {Image, View} from 'react-native';

import logo from '../assets/images/logo.png';

export default () => (
    <View 
        style={
            {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: '#f5f5f5',
            }
        }
    >
        <Image source={logo} />
    </View>
);