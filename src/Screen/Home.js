import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import ImagePath from '../Image/ImagePath';

const Home = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.box1}>
        <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.linearGradient}>
          <Image source={ImagePath.bike} />
        </LinearGradient>
      </View>
      <View style={styles.box2}>
        <View style={styles.nameset}>
          <Text style={styles.text}>Order from a wide range </Text>
          <Text style={styles.text}>of restaurents</Text>
        </View>
        <Text style={styles.dotes}>...</Text>
        <View>
          <Text style={styles.text2}>Ready from awide range of restaurents</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} activeOpacity={0.8}>
          <View style={styles.login}>
            <Text style={styles.get}>GET STARTED</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  box1: {
    flex: 2,
    alignSelf: 'center',


  },
  box2: {
    flex: 2,

  },
  linearGradient: {
    flex: 2,
    borderRadius: 15
  },
  text: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  nameset: {
    marginVertical: 20
  },
  dotes: {
    fontSize: 70,
    textAlign: "center",
    bottom: 50
  },
  text2: {
    fontWeight: 'bold',
    textAlign: 'center',
    bottom: 35
  },
  login: {
    alignSelf: 'center',
    backgroundColor: '#FF0059',
    height: 65,
    width: '85%',
    borderRadius: 20,
    justifyContent: 'center',
  },
  get: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color:'white'
  }

})