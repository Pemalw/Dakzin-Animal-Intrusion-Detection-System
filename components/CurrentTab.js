import React from 'react';
import { StyleSheet, Image, View, Text, FlatList} from 'react-native';


const CurrentTab = ({data}) => {
  
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.text}>{data.length != 0? data[1]: "Camera name"}</Text>
        <Text style={styles.text}>{data.length != 0? data[3] : "TimeStamp"}</Text>
        <Image style={styles.image} source={data.length != 0 ? { uri: `data:image/jpeg;base64,${data[0]}` } : require('../assets/images/default.jpg')} />
        <Text style={styles.text}>{data.length != 0? data[2] : "animal name"}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 12,
    backgroundColor: '#ffffff',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 8,
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default CurrentTab;