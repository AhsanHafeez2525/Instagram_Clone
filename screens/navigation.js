import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import NewPostScreen from './NewPostScreen';


const Stack = createNativeStackNavigator();

const screenOptions ={
    headerShown: false,
}
const SignInStack = () => (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen' screenOptions={screenOptions}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />

      </Stack.Navigator>
    </NavigationContainer>
)

export default SignInStack