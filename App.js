import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Header from './components/Header';
import CurrentTab from './components/CurrentTab';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator} from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DataAnalysis from './components/DataAnalysis';
import AboutCST from './screens/AboutCST';
import AboutAMTC from './screens/AboutAMTC';
import ContactUs from './screens/ContactUs';
import Help from './screens/Help';
import { useState, useEffect } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

import Paho from 'paho-mqtt';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

// client = new Paho.Client(
//   "670e447454294335a3bf85d1ad54205d.s2.eu.hivemq.cloud",
//   Number(8884),
//   `mqtt-async-test-${parseInt(Math.random() * 100)}`
// );

client = new Paho.Client(
  "34773dcfbaf24a4bba66e5a333c2df9a.s1.eu.hivemq.cloud",
  Number(8884),
  `mqtt-async-test-${parseInt(Math.random() * 100)}`
);

const App = () => {

  const [value, setValue] = useState([]);
  const [systemname, setSystemName] = useState('');
  const [timestamp, setTimeStamp] = useState('');
  const [imageSource, setImageSource] = useState('');
  const [animalname, setAnimalName] = useState('');

  function onMessage(message) {
    if (message.destinationName === "animal")
        setValue(message.payloadString.toString().split("####"));
  }

  useEffect(() => {
    client.connect( {
      onSuccess: () => { 
      console.log("Connected!");
      client.subscribe("animal");
      client.onMessageArrived = onMessage;
    },
    onFailure: () => {
      console.log("Failed to connect!"); 
    },
    // userName: 'ads001',
    // password: '12345678Ads',
    userName: 'ads@rpi',
    password: 'Ads12345678',
    useSSL: true
  });
  }, [])

 


  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            header: () => <Header />,
          }}
        >
          <Drawer.Screen name="Homepage">
            {() => (
              <Tab.Navigator>
                <Tab.Screen 
                  name="Home" 
                  // component={CurrentTab} 
                  options={{headerTitle: '',
                            headerStatusBarHeight: -50,
                            tabBarIcon: ({ color, size }) => (
                              <MaterialCommunityIcons name="home" color={color} size={size} />
                            ),
                          }}
                >
                  {(props) => <CurrentTab {...props} data={value}/>}
                </Tab.Screen>
                <Tab.Screen 
                  name="Data Analysis" 
                  component={DataAnalysis}
                  options={{headerTitle: '',
                            headerStatusBarHeight: -50,
                            tabBarIcon: ({ color, size }) => (
                              <Entypo name="bar-graph" color={color} size={size} />
                            ),
                          }}
                  initialParams={{data: 'hello'}}

                />
              </Tab.Navigator>
            )}
          </Drawer.Screen>
          <Drawer.Screen name="System Information" component={Help}/>
          <Drawer.Screen name="CST" component={AboutCST} />
          <Drawer.Screen name="AMTC" component={AboutAMTC}/>
          <Drawer.Screen name="Contact Us" component={ContactUs}/>
          <Drawer.Screen name="Help" component={Help}/>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  // image: {
  //   height: 100,
  //   width: 100
  // },
});

export default App;