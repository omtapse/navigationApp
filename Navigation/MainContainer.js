import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './Scrrens/HomeSecreen/HomeSreen';
import BasketScrren from './Scrrens/BasketScrren';
import SettingScrren from './Scrrens/SettingScrren';
import React from 'react';
import homeIcon from '../icons/house-chimney-solid.svg';
import Svg, {Circle} from 'react-native-svg';
import HomeSreen1 from './Scrrens/HomeSecreen/HomeSreen1';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen2 from './Scrrens/HomeSecreen/HomeScreen2';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeScreenStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home1" component={HomeSreen1} />
      <Stack.Screen name="home2" component={HomeScreen2} />
      <Stack.Screen name="home3" component={HomeScreen} />
    </Stack.Navigator>
  );
};
const MainContainer = ({navigation}) => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;
            if (rn == 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == 'Basket') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn == 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }
            return (
              <Image
                source={require('../icons/baseline_home_black_24dp.png')}
              />
            );
          },
        })}>
        <Tab.Screen name="Basket" component={BasketScrren} />
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Settings" component={SettingScrren} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainContainer;

const styles = StyleSheet.create({});
