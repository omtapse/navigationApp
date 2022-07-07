import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeSreen1 from './HomeSreen1';
const Stack = createNativeStackNavigator();

const HomeSreen3 = ({navigation}) => {
  return (
    <View>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeSreen1} />
      </Stack.Navigator> */}
      <View style={styles.pagesRow}>
        <TouchableOpacity onPress={() => navigation.navigate('home1')}>
          <View style={styles.pageNumberBox}>
            <Text>1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('home2')}>
          <View style={styles.pageNumberBox}>
            <Text>2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.pageNumberBox}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeSreen3;

const styles = StyleSheet.create({
  pagesRow: {
    flexDirection: 'row',
    marginTop: 80,
    justifyContent: 'center',
  },
  pageNumberBox: {
    paddingTop: 10,
    borderWidth: 1,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderColor: 'black',
    borderStartColor: 'black',
  },
});
