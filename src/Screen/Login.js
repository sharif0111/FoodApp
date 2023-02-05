import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.box1}>
                <Image style={styles.meggie} source={ImagePath.meggie} />
            </View>
            <View style={styles.box2}>
                <Text style={styles.text1}>Login</Text>
                <View style={styles.inpview}>
                    <TextInput style={styles.input} placeholder='Email' /></View>
                <View style={styles.inpview}>
                    <Image style={styles.lock} source={ImagePath.lock} />
                    <TextInput style={styles.input} placeholder='Password' /></View>
                <View>
                    <Text style={styles.forgot}>Forgot Password</Text>
                </View>
                <View style={styles.option}>
                    <View style={styles.orback}>
                        <Text style={styles.or}>OR</Text>
                    </View>
                </View>
                <View style={styles.fbgl}>
                    <View>
                        <Image style={styles.fb} source={ImagePath.facebook} />
                    </View>
                    <View>
                        <Image style={styles.gl} source={ImagePath.google} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}activeOpacity={0.7}>
                    <View style={styles.login}>
                        <Text style={styles.logtext}>LOGIN</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.dont}>
                    <Text style={styles.last}>Don't have an account ?</Text>
                    <Text style={styles.last2}>Register</Text>
                </View>

            </View>

        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    box1: {
        flex: 2,
        backgroundColor: '#FF0059',

    },

    box2: {
        // flex: 2,
        height: 420,
        width: '90%',
        alignSelf: 'center',
        bottom: 65,
        backgroundColor: 'white',
        elevation: 5
    },
    meggie: {
        alignSelf: 'center'
    },
    text1: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        marginVertical: 15,
        marginHorizontal: 15
    },
    inpview: {
        backgroundColor: 'white',
        borderRadius: 10,
        width: '90%',
        alignSelf: 'center',
        elevation: 10,
        marginVertical: 10,

    },
    input: {
        color: 'black',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    lock: {
        height: 27,
        width: 40,
        resizeMode: 'contain',
        position: 'absolute',
        alignSelf: 'flex-end',
        marginVertical: 10

    },
    forgot: {
        alignSelf: 'flex-end',
        marginRight: 20,
        fontWeight: 'bold',
        fontSize: 17
    },
    option: {
        backgroundColor: 'lightgrey',
        height: 4,
        width: '75%',
        alignSelf: 'center',
        marginVertical: 25
    },
    or: {
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 17,
        bottom: 2
    },
    orback: {
        backgroundColor: 'lightgrey',
        height: 20,
        width: 32,
        borderRadius: 10,
        alignSelf: 'center',
        bottom: 10

    },
    fb: {
        resizeMode: 'contain',
        height: 40,
        width: 35,
        marginHorizontal: 10

    },
    gl: {
        resizeMode: 'contain',
        height: 40,
        width: 35,
        marginHorizontal: 10
    },
    fbgl: {
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: 10,
    },
    login: {
        alignSelf: 'center',
        backgroundColor: '#FF0059',
        height: 53,
        width: '90%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logtext: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'

    },
    dont: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginVertical: 10
    },
    last: {
        fontSize: 18,
        color: 'black',
        fontWeight: '500'

    },
    last2: {
        fontSize: 18,
        color: '#FF0059',
        fontWeight: '500'

    }

})