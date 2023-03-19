import React from 'react'
import { SafeAreaView, StyleSheet} from 'react-native'
import AddNewPost from '../components/home/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: 'black', flex: 1}}>
      <AddNewPost />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
export default NewPostScreen
