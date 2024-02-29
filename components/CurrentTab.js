import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
} from "react-native";

const CurrentTab = ({ datas }) => {
  // const [currentTime, setCurrentTime] = useState(getDate());

  // function getDate() {
  //   const now = new Date();
  //   const month = now.getMonth() + 1;
  //   const year = now.getFullYear();
  //   const date = now.getDate();
  //   const hours = now.getHours();
  //   const min = now.getMinutes();
  //   const sec = now.getSeconds();
  //   return `${year}-${month}-${date} ${hours}:${min}:${sec}`;
  // }

  /*
  function isNow() {
    var nos=""
    var nos=datas.length !== 0?datas[3] : "2024-01-29 12:15:00"
    const timestamp = new Date(nos).getTime();
    const currentTime = new Date().getTime(); // Get current timestamp

    const timeDiff = (currentTime - timestamp) / (1000 * 60); // Convert milliseconds to minutes

    if (timeDiff <= 5) {
      return true;
    } else {
      return false;
    }
  }*/

  const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    container: {
      margin: 12,
      //backgroundColor: isNow() ? '#87edbc' : '#ffffff',
      backgroundColor: "#ffffff",
      paddingHorizontal: 50,
      paddingVertical: 20,
      borderRadius: 15,
    },
    text: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 16,
      margin: 8,
    },
    animalText: {
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 20,
      margin: 8,
    },
    image: {
      width: 250,
      height: 250,
      marginVertical: 10,
      borderRadius: 15,
    },
  });

  const renderItem = ({ item, index }) => {
    const imageMapping = {
      Bear: require("../assets/images/Bear.jpg"),
      Boar: require("../assets/images/Boar.jpg"),
      Cattle: require("../assets/images/Cattle.jpg"),
      Deer: require("../assets/images/Deer.jpg"),
      Elephant: require("../assets/images/Elephant.jpg"),
      Horse: require("../assets/images/Horse.jpg"),
      Monkey: require("../assets/images/Monkey.jpg"),
    };
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{item[1]}</Text>
        <Text style={styles.text}>{item[3]}</Text>
        {/* <Text style={styles.text}>CT: {currentTime}</Text> */}
        <Image style={styles.image} source={imageMapping[item[2]]} />
        <Text style={styles.animalText}>{item[2]}</Text>
      </View>
    );
  };

  return (
    // <ScrollView>
    <View style={styles.main}>
      <FlatList
        renderItem={renderItem}
        data={datas ? datas : datas}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
    // </ScrollView>
  );
};

export default CurrentTab;
