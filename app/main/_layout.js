import { Drawer } from 'expo-router/drawer';
import { View, Image } from 'react-native';


export default function layout () {
    return (
      <Drawer screenOptions={{
        headerStatusBarHeight:15,
      }}
      initialRouteName='Home'>
        <Drawer.Screen name="Home"/>
        <Drawer.Screen name="System Information"/>
        <Drawer.Screen name="About Us"/>
        <Drawer.Screen name="Contact Us"/>
        <Drawer.Screen name="Help"/>
        <Drawer.Screen name="Settings"/>
      </Drawer> 
    )
}