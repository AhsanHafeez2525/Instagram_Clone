import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from '../screens/NewPostScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();
const screenOptions ={
    headerShown: false,
}
const SignInStack = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='LoginScreen' screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />

      </Stack.Navigator>
    </NavigationContainer>
)
export default SignInStack