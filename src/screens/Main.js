import React, {useCallback} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';

import logo from '../assets/images/logo.png';

export default ({navigation: {navigate}}) => { 
    
    const onLogout = useCallback(() => navigate('login'), [navigate]);

    return(
        <View 
            style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: '#f5f5f5',
                }}
        >
            <TouchableOpacity onPress={onLogout}>
                <Image source={logo} />
            </TouchableOpacity>

            <View
                style={{
                        borderWidth: 1,
                        borderColor: '#ddd',
                        borderRadius: 8,
                        margin: 30,
                    }}
            >
                <Image 
                    style={{
                            height: 300,
                            width: 300,
                        }}
                    source={null}
                />
            </View>
        </View>
    );
}