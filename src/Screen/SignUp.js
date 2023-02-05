import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native'
import React from 'react'
import ImagePath from '../Image/ImagePath'

const SignUp = ({navigation}) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.bike}>
                <Image source={ImagePath.boy} />
            </View>
            <View style={styles.box}>
                <View style={styles.signveiw}>
                    <Text style={styles.signtext}>Sign Up</Text>
                </View>
                <View>
                    <View style={styles.inp}>
                        <TextInput placeholder='Enter Email ID/ Phone No' placeholderTextColor={'black'} />
                    </View>
                    <View style={styles.inp}>
                        <TextInput placeholder='Password' placeholderTextColor={'black'}/>
                    </View>
                    <View style={styles.inp}>
                        <TextInput placeholder='Confirm Password' placeholderTextColor={'black'}/>
                    </View>
                    <TouchableOpacity onPress={()=> navigation.navigate('OTP')} activeOpacity={0.7}>
                    <View style={styles.signin}>
                        <Text style={styles.sign}>SIGN IN</Text>
                    </View>
                    </TouchableOpacity>
                </View>

            </View>
            <View style={styles.lastveiw}>
            <Text style={styles.last}>Don't have an account ?</Text> 
                    <Text style={styles.last2}>Register</Text>
            </View>

        </View>
    )
}

export default SignUp

const styles = StyleSheet.create({
    bike: {
        flex: 2,
        backgroundColor: '#FF0059'
    },
    box: {
        flex: 2,
        // borderWidth:2,
        elevation: 5,
        bottom: 65,
        marginHorizontal: 15,
        backgroundColor: 'white'
    },
    signveiw: {
        marginVertical: 10,
        marginHorizontal: 10
    },
    signtext: {
        color: 'black',
        fontSize: 30,
        fontWeight: '500'
    },
    inp:{
        backgroundColor:'lightpink',
        width:'90%',
        alignSelf:'center',
        margin:10,
        borderRadius:10,
        paddingLeft:10,


    },
    signin:{
        backgroundColor:'#FF0059',
        height:60,
        width:'90%',
        alignSelf:'center',
        borderRadius:22,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:20
    },
    sign:{
        fontSize:25,
        color:'white',
        
    },
    lastveiw:{
        flexDirection:'row',
        justifyContent:'center',
        bottom:60
    },
    last:{
        color:'black',
        fontSize:20,
        fontWeight:'400',
    },
    last2:{
        color:'#FF0059',
        fontSize:20
    }
})