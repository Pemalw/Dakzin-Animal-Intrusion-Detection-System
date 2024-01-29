import React, {useState} from 'react';
import { StyleSheet, Image, View, TouchableOpacity, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import {useNavigation } from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.drawerIcon} onPress={openDrawer}>
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  drawerIcon: {
    marginTop: 10,
  },
  logoContainer: {
    flex: 1,
    alignItems:'center',
  },
  logo: {
    width: 60, 
    height: 60,
    resizeMode: 'contain',
  },
});

export default Header;