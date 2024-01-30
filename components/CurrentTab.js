import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, View, Text, FlatList} from 'react-native';

const CurrentTab = ({data}) => {

  function isNow() {
    var nos=""
    var nos=data.length !== 0?data[3] : "2024-01-29 12:15:00"
    const timestamp = new Date(nos).getTime();
    const currentTime = new Date().getTime(); // Get current timestamp

    const timeDiff = (currentTime - timestamp) / (1000 * 60); // Convert milliseconds to minutes

    if (timeDiff <= 5) {
      return true;
    } else {
      return false;
    }
  }

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#ffffff',
    },
    container: {
      margin: 12,
      backgroundColor: isNow() ? '#87edbc' : '#ffffff',
      paddingHorizontal: 50,
      paddingVertical: 20,
      borderRadius: 15,
    },
    text: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
      margin: 8,
    },
    animalText: {
      textAlign: 'center',
      fontWeight: '800',
      fontSize: 24,
      margin: 8,
    },
    image: {
      width: 250,
      height: 250,
      marginVertical: 10,
      borderRadius: 15,
    },
  });

  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>{data.length != 0? data[1]: "Camera name"}</Text>
        <Text style={styles.text}>{data.length != 0? data[3] : "TimeStamp"}</Text>
        <Image style={styles.image} source={data.length != 0 ? { uri: `data:image/jpeg;base64,${data[0]}` } : require('../assets/images/default.jpg')} />
        <Text style={styles.animalText}>{data.length != 0? data[2] : "animal name"}</Text>
      </View>
    </View>
  );

};



export default CurrentTab;