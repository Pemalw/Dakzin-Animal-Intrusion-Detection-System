import React from 'react';
import { StyleSheet, View, Image} from 'react-native';
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

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();


const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            header: () => <Header />,
            
          }}
        >
          <Drawer.Screen name="Home">
            {() => (
              <Tab.Navigator>
                <Tab.Screen 
                  name="Current Tab" 
                  component={CurrentTab} 
                  options={{headerTitle: '', headerStatusBarHeight: -50, }}

                />
                <Tab.Screen 
                  name="Data Analysis" 
                  component={DataAnalysis}
                  options={{headerTitle: '', headerStatusBarHeight: -50, }}

                />
              </Tab.Navigator>
            )}
          </Drawer.Screen>
          <Drawer.Screen name="System" component={CurrentTab}/>
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
    justifyContent: 'space-between'
  },
});

export default App;