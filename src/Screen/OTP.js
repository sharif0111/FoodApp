import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import ImagePath from '../Image/ImagePath'

const OTP = ({navigation}) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.box1}>
        <Image source={ImagePath.girl} />
      </View>
      <View style={styles.box2}>
        <View>
          <Text style={styles.otp}>OTP</Text>
        </View>
        <View style={styles.otpveiw}>
          <Text style={styles.etrotp}>Enter OTP Send To</Text>
          <Text style={styles.otpsend}> 341512</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>

          <View style={styles.boxveiw}>
            <TextInput style={styles.otpbox} placeholder='' />
          </View>
          <View style={styles.boxveiw}>
            <TextInput style={styles.otpbox} placeholder='' />
          </View>
          <View style={styles.boxveiw}>
            <TextInput style={styles.otpbox} placeholder='' />
          </View >
          <View style={styles.boxveiw}>
            <TextInput style={styles.otpbox} placeholder='' />
          </View>

        </View>
        <TouchableOpacity onPress={()=> navigation.navigate('LOGOUT')} activeOpacity={0.7}>
        <View style={styles.subveiw}>
          <Text style={styles.subtext}>SUBMIT</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.lastveiw}>
          <Text style={styles.lastext}>Don't Receive the OTP?</Text>
          <Text style={styles.lastext2}>RESEND</Text>
        </View>
      </View>
    </View>
  )
}

export default OTP

const styles = StyleSheet.create({
  box1: {
    backgroundColor: '#FF0059',
    flex: 2
  },
  box2: {
    height: 385,
    width: '90%',
    alignSelf: 'center',
    bottom: 65,
    backgroundColor: 'white',
    elevation: 5
  },
  otp: {
    color: "black",
    fontSize: 30,
    fontWeight: 'bold',
    padding: 15,

  },
  otpveiw: {
    flexDirection: 'row',
    justifyContent: 'center'

  },
  etrotp: {
    color: 'black',
    fontSize: 17,
    fontWeight: '500',

  },
  otpsend: {
    color: 'red',
    fontSize: 18,
    fontWeight: '500',
  },

  boxveiw: {
    height: 60,
    width: '20%',
    backgroundColor: 'rgba(232, 226, 248, 0.8)',
    borderRadius: 15,
    // elevation: 10,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center'

  },
  subveiw:{
    backgroundColor: '#FF0059',
    height:60,
    width:'97%',
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    borderRadius:20,
    marginVertical:20
  },
  subtext:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  lastveiw:{
    flexDirection:'row',
    justifyContent:'center',
    marginVertical:5
  },
  lastext:{
    color:'black',
    fontSize:18,
    fontWeight:'bold',
  },
  lastext2:{
    color:'red',
    fontWeight:'bold',
    fontSize:18,
  }


})