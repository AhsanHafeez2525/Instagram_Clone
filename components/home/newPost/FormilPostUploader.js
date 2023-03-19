import React,{useState} from 'react'
import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Image } from 'react-native';
import { Divider } from 'react-native-elements';
const PLACEHOLDER_IMG  = 'https://t3.ftcdn.net/jpg/03/29/64/56/360_F_329645688_8ODoJI5NrLeQDi6K16JvR6DhH2gDXpRV.jpg';
const uploadPostSchema = Yup.object().shape({
    imageUrl: Yup.string().url().required('A URL is required'),
    caption: Yup.string().max(2200, 'Caption has reached the character limit')
})
const FormilPostUploader = () => {
const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG)
  return (
    <Formik initialValues={{caption: '',imageUrl: ''}}
    onSubmit={(values) => console.log(values)}
    validationSchema={uploadPostSchema}
    validateOnMount={true}
    >
    {({handleBlur, handleChange, handleSubmit, values, errors,isvalid}) =>
    <>
      <View style={{margin: 20, justifyContent: 'space-between', flexDirection: 'row'}}>
        <Image source={{uri
        : thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }} style={{width: 100, height: 100, borderRadius: 5}}/>
 <View style={{flex: 1, marginLeft: 12}}>       
      <TextInput
       style={{color: 'white', fontSize: 20}}
       placeholder='write a caption...' placeholderTextColor='gray'
       multiline={true}
       onChangeText={handleChange('caption')}
       onBlur={handleBlur('caption')}
       value={values.caption}
      /> 
      </View>
      </View>
      <Divider width={0.2} orientation='vertical' />
      <TextInput 
      onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
       style={{color: 'white', fontSize: 20}}
      placeholder='Enter Image Url' placeholderTextColor='gray'
      multiline={true}
      onChangeText={handleChange("imageUrl")}
      onBlur={handleBlur('imageUrl')}
      value={values.imageUrl}

      />
      {errors.imageUrl && (
        <Text style={{fontSize: 10, color: 'red'}}>
          {errors.imageUrl}
        </Text>
      )}
      <Button 
      onPress={handleSubmit}
      title='Share'
      disabled={!isvalid}
      />
    </>
    }
    </Formik>
  )
}
const styles = StyleSheet.create({})
export default FormilPostUploader