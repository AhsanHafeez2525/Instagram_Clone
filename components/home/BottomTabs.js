import React,{useState} from 'react'
import { StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home.png',
        inctive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/home.png'
    },
    {
        name: 'Search',
        active: 'https://img.icons8.com/ios-filled/500/ffffff/search--v1.png',
        inctive: 'https://img.icons8.com/ios/500/ffffff/search--v1.png'
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/50/ffffff/instagram-reel.png',
        inctive: 'https://img.icons8.com/ios/500/ffffff/instagram-reel.png'
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/fluency-systems-filled/48/ffffff/shopping-bag-full.png',
        inctive: 'https://img.icons8.com/fluency-systems-regular/48/ffffff/shopping-bag-full.png'
    },
    {
        name: 'Profile',
        active: 'https://media.licdn.com/dms/image/C4D03AQE6c4zacLKvDw/profile-displayphoto-shrink_800_800/0/1611420809196?e=1683158400&v=beta&t=OyZ3zRr5Vq7qhDGXtI2PaCanJY8c7IlKodAAejzj7_s',
        inctive: 'https://media.licdn.com/dms/image/C4D03AQE6c4zacLKvDw/profile-displayphoto-shrink_200_200/0/1611420809196?e=1681948800&v=beta&t=m_-H2AsywMyQKGYb838kV8GuJqWlLwHTV019mI46j-g'
    },
]

const BottomTabs = ({icons}) => {
const [activeTab, setActiveTab] = useState('Home')

const Icon = ({icon}) =>(
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
        <Image source={{uri: activeTab === icon.name ? icon.active : icon.inctive}} style={[styles.icon, icon.name === 'Profile' ? styles.profilePic(): null, activeTab === 'Profile' && icon.name === activeTab ? styles.profilePic(activeTab):null]} />
    </TouchableOpacity>
)
  return (
    <View style={styles.wrapper}>
    <Divider width={1} orientation='vertical'/>
    <View style={styles. container}>
      {icons.map((icon,index)=>(
        <Icon key={index} icon={icon}/>
      ))}
    </View>
    </View>
  )
}

export default BottomTabs

const styles = StyleSheet.create({
wrapper:{
position: 'absolute',
width: '100%',
bottom: '0.1%',
zIndex: 999,
backgroundColor: '#000',


},

    container:{
flexDirection: 'row',
justifyContent: 'space-around',
height: 50,
paddingTop: 10,
    },

    icon:{
        width: 30,
        height:30,
    },
    profilePic: (activeTab = '') => ({
       borderRadius: 50,
       borderWidth: activeTab === 'Profile' ? 2:0,
       borderColor: '#fff', 
    })
})