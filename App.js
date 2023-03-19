import React from 'react'
import SignInStack from './screens/navigation'
import { StatusBar } from 'react-native'
const App = () => {
  return (
    <>
    <StatusBar barStyle='light-content' backgroundColor='black'/>
    <SignInStack />
    </>
  )
}
export default App