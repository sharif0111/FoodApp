import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screen/Home';
import Login from '../Screen/Login';
import Signup from '../Screen/SignUp';
import OTP from '../Screen/OTP';
import LOGOUT from '../Screen/LOGOUT';
import Favourites from '../Screen/Favourites';




const Stack = createNativeStackNavigator();

const StackNavigation =()=> {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Favourites'>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name="OTP" component={OTP} options={{ headerShown: false }} />
            <Stack.Screen name="LOGOUT" component={LOGOUT} options={{ headerShown: false }} />
            <Stack.Screen name="Favourites" component={Favourites} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigation;