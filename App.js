import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
// import HomeScreen from './screens/HomeScreen'
import NewPostScreen from './screens/NewPostScreen'
const App = () => {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='black'/>
    <NewPostScreen />
    </>
  )
}
const styles = StyleSheet.create({})
export default App