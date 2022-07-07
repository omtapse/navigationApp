import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import MainContainer from './Navigation/MainContainer';
import StackNavigator from './Navigation/StackNavigator/StackNavigator';


const App = ()  => {
  return (
    <MainContainer />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  BootomNavbar:{
      alignItems:'flex-end'
  }
});

export default App;
