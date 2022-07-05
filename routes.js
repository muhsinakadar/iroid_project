import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import splashscreen from './splashscreen';
import loginscreen from './loginscreen';
import homescreen from './homescreen';

const Stack = createStackNavigator();


const routes = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
  
            <Stack.Screen name="Splash" component={splashscreen} />
            <Stack.Screen name="Login" component={loginscreen} />
            <Stack.Screen name="Home" component={homescreen} />
            
          </Stack.Navigator>
        </NavigationContainer>
      );
}

export default routes;