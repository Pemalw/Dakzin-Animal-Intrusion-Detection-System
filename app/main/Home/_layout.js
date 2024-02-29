import {Tabs} from 'expo-router';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';


export default function layout () {
    return (
    // <Drawer>
    //   <Drawer.Screen name="home">
    //     {() => (
          <Tabs initialRouteName='Results'>
            <Tabs.Screen 
                      name="Results" 
                      // component={CurrentTab} 
                      options={{headerTitle: '',
                                headerStatusBarHeight: -50,
                                tabBarIcon: ({ color, size }) => {
                                    return <MaterialCommunityIcons name="home" color={color} size={size} />
                                },
                              }}

                    />
                    <Tabs.Screen 
                      name="Data Analysis"
                      options={{headerTitle: '',
                      tabBarLabel: 'Data Analysis',
                                headerStatusBarHeight: -50,
                                tabBarIcon: ({ color, size }) => (
                                  <Entypo name="bar-graph" color={color} size={size} />
                                ),
                              }}
                      initialParams={{data: 'hello'}}
                    />
          </Tabs>
      //   )}
      // </Drawer.Screen>
      // <Drawer.Screen name="System Information"/>
      // <Drawer.Screen name="About Us"/>
      // <Drawer.Screen name="Contact Us"/>
      // <Drawer.Screen name="Help"/>
      // <Drawer.Screen name="Settings"/>
  // </Drawer> 
    )
}