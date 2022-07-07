import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const HomeSreen2 = ({navigation}) => {
  return (
    <View>
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
        <TouchableOpacity onPress={()=> navigation.navigate('home3')}>
          <View style={styles.pageNumberBox}>
            <Text>3</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeSreen2

const styles = StyleSheet.create({ pagesRow: {
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
  },})