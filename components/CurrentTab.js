import React from 'react';
import { StyleSheet, Image, View, Text, FlatList} from 'react-native';

const DATA = [
  {
    CameraName: 'Camera 1',
    DateTime: '29/10/24',
    image: require('../assets/images/boar.jpeg'),
    comment: 'Wild Pig Detected!',
  },
  {
    CameraName: 'Camera 2',
    DateTime: '25/10/24',
    image: require('../assets/images/boar.jpeg'),
    comment: 'Elephant Detected!',
  },
  {
    CameraName: 'Camera 3',
    DateTime: '30/10/24',
    image: require('../assets/images/boar.jpeg'),
    comment: 'Monkey Detected!',
  },
];

const renderItem = ({ item }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{item.CameraName}</Text>
        <Text style={styles.text}>{item.DateTime}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.comment}</Text>
    </View>
);

const CurrentTab = ({route}) => {
  return (
    <View style={styles.main}>
        <FlatList
            data={DATA}
            renderItem={renderItem}
        />
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