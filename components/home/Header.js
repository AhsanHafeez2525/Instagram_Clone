import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
    <TouchableOpacity>
      <Image style={styles.logo1} source={require ('../../assets/logo1.png') }/>
    </TouchableOpacity>
    <View style={styles.iconsContainer}>
    <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
        <Image 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png'
            }}
            style={styles.icon}
        />
    </TouchableOpacity>
    <TouchableOpacity>
        <Image 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png'
            }}
            style={styles.icon}
        />
    </TouchableOpacity>
    <TouchableOpacity>
    <View style={styles.unreadBadge}>
<Text style={styles.unreadBadgeText}>
11</Text>
    </View>
        <Image 
            source={{
                uri: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
            }}
            style={styles.icon}
        />
    </TouchableOpacity>
    </View>
    </View>
  )
}
export default Header
const styles = StyleSheet.create({
    container:{
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 0,
 },
    iconsContainer:{
flexDirection: 'row',
    },
    logo1:{
        width: 100,
        height: 50,
        resizeMode: 'contain',
    },
    icon:{
        width: 30,
        height: 30,
        marginLeft: 10,
        resizeMode: 'contain'
    },
    unreadBadge:{
backgroundColor: '#FF3250',
position: 'absolute',
left: 20,
bottom: 18,
width: 25,
height: 18,
borderRadius: 25,
alignItems: 'center',
zIndex: 100,
},
unreadBadgeText:{
    color: 'white',
    fontWeight: '600',
},
})