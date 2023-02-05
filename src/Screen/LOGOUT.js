import { StyleSheet, Text, View, Image, TextInput,TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import React from 'react'
import ImagePath from '../Image/ImagePath';


const LOGOUT = ({navigation}) => {
    return (
        <View style={{ flex: 1,backgroundColor:'white' }}>
            <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.linearGradient}>
                <Image style={styles.Image} source={ImagePath.profile} />
            </LinearGradient>
            <View style={styles.View}>
                <View style={styles.TextInput}>
                    <TextInput style={styles.Input} placeholder='Full Name' placeholderTextColor={'black'} />
                    <Text style={styles.Text}>EDIT</Text>
                </View>
                <View style={styles.TextInput1}>
                    <View>
                        <TextInput style={styles.Input} placeholder='My Account' placeholderTextColor={'black'} />
                        <Text style={styles.Textt}>Favourites, Offers & Settings</Text></View>
                    <Image style={styles.back} source={ImagePath.back} />
                </View>
                <View style={styles.TextInput1}>
                    <View>
                        <TextInput style={styles.Input} placeholder='Addresses' placeholderTextColor={'black'} />
                        <Text style={styles.Textt}>Share, Edit & Add New Addresses</Text></View>
                    <Image style={styles.back} source={ImagePath.back} />
                </View>
                <View style={styles.TextInput2}>
                    <View>
                        <Text style={styles.Inputt}>Payments & Refunds</Text>
                        <Text style={styles.Texttt}>Refund Status & Payment Modes</Text></View>
                    <Image style={styles.down} source={ImagePath.dawan} />
                </View>
                <View style={styles.TextInput2}>
                    <View>
                        <Text style={styles.Inputt}>Help</Text>
                        <Text style={styles.Texttt}>Share, Edit & Add New Addresses</Text></View>
                    <Image style={styles.backk} source={ImagePath.back} />
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate('Detail')}activeOpacity={0.7}>
                <View style={styles.Log}>
                    <Text style={styles.Log1}>LOGOUT</Text>
                </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LOGOUT

const styles = StyleSheet.create({
    linearGradient: {
        // height:200
        flex: 2,
        justifyContent: 'center'

    },
    View: {
        flex: 4,
        width: '90%',
        alignSelf: 'center',
        bottom: 50,
        backgroundColor: '#FFF2F2',
        // elevation: 10
    },
    Image: {
        alignSelf: 'center',
        height: 200,
        resizeMode: 'contain',
    },
    TextInput: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 15,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Input: {
        marginLeft: 10,
        fontWeight: 'bold',

    },
    Text: {
        color: 'red',
        marginTop: 15,
        marginRight: 10,

    },
    TextInput1: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 15,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    Input: {
        marginLeft: 10,
        fontWeight: 'bold',

    },
    Textt: {
        bottom: 15,
        marginLeft: 14,
        fontSize: 12
    },
    back: {
        marginTop: 25,
        marginRight: 10
    },
    Inputt: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'black',
        // marginTop:10

    },
    Texttt: {
        // bottom:15,
        marginLeft: 10,
        fontSize: 12
    },
    TextInput2: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 15,
        elevation: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    backk: {
        marginTop: 10,
    },
    down: {
        marginTop: 10,
    },
    Log:{
        backgroundColor:'white',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        marginTop:30
    },
    Log1:{
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    }
})