import React from 'react';
import { View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import loginscreen from './loginscreen';

const splashscreen = () => {
    const navigation = useNavigation();

    setTimeout(() => {
        navigation.navigate('Login')
    }, 2000);
    
    return(
        <View style={styles.viewStyles}>
            <View>
                <Image source={require("project_sample/assets/splash_icon.png")}></Image>
            </View>
        </View>
    );
}

const styles = {
    viewStyles: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
}

export default splashscreen;