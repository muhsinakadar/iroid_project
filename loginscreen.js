import React from 'react';
import { View, TouchableOpacity, Text, TextInput } from 'react-native';
import Colors from './colors';
import { useNavigation } from '@react-navigation/native';
import homescreen from './homescreen';

const loginscreen = (props) => {
    const navigation = useNavigation();
    const home = () => {
        navigation.navigate('Home')
    }
    return(
        <View>
            <View style={{ alignSelf: 'flex-end', marginTop: 10, marginRight: 10 }}>
                    <TouchableOpacity>
                        <Text style={{ color: Colors.black, fontWeight: 'bold', fontSize: 20, fontFamily: 'Segoe UI, Bold'}}>Skip</Text>
                    </TouchableOpacity>
            </View>
            <View>
                    <Text style={{ fontSize: 40, color: Colors.black, fontWeight: 'bold', marginTop: 40, alignSelf: 'center', fontFamily: 'Segoe UI, Bold' }}>Sign In</Text>
                    <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 20, fontFamily: 'Segoe UI, Regular' }}>Enter Your Details</Text>
            </View>
            <View style={{ marginTop: 40 }}>
                    <TextInput placeholder='   User Name' style={{ backgroundColor: Colors.light_grey, height: 70, borderRadius: 30, marginLeft:20, marginRight: 20, fontFamily: 'Segoe UI, Light' }}/>
                    <TextInput placeholder='   Password' style={{ backgroundColor: Colors.light_grey, height: 70, borderRadius: 30, marginLeft:20, marginRight: 20, fontFamily: 'Segoe UI, Light', marginTop: 20 }}/>
            </View>
            <View style={{ marginTop: 20, alignItems: 'center' }}>
                    <TouchableOpacity style={{ width: "90%", marginLeft: 20, marginRight: 20, backgroundColor: Colors.signin_blue, height: 70, borderRadius: 30, alignItems: 'center'}} onPress={() => home()}>
                        <Text style={{ color: Colors.white, fontWeight: 'bold', fontFamily: 'Segoe UI, Semibold', marginVertical: 20, fontSize: 20 }}>Sign In</Text>
                    </TouchableOpacity>
            </View>
            <View>
                    <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 20, color: Colors.forgot_pwd, fontFamily: 'Segoe UI, Semibold' }}>Forgot your password?</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, alignSelf:"center", alignContent:"center" }}>
                    <Text style={{ marginTop: 20, alignSelf: 'center', fontSize: 20, fontFamily: 'Segoe UI, Regular' }}>Don't have an account?</Text>
                    <Text style={{ marginTop: 20, marginLeft: 10, fontSize: 20, fontWeight: 'bold', color: Colors.signin_blue, fontFamily: 'Segoe UI, bold' }}>Sign Up</Text>
            </View>

            
        </View>
    );
}

export default loginscreen;