import { StyleSheet, Text, View, Image,ImageBackground } from 'react-native'
import React from 'react'
import ImagePath from '../Image/ImagePath';
import LinearGradient from 'react-native-linear-gradient';
const Favourites = () => {
    return (
        <View style={{ flex: 1 }}>
            <LinearGradient colors={['#FF0059', '#F4C210']} style={styles.linearGradient}>
                <View style={styles.im11}>
                    <Image source={ImagePath.leftcross} />
                    <Text style={styles.favorts}>FAVOURITES</Text>
                </View>
                <View style={styles.border}>
                </View>
                <View style={styles.heart}>
          <ImageBackground style={styles.img} source={ImagePath.whiteimg}>
                <Image style={styles.im10} source={ImagePath.redheart} />
                </ImageBackground>
                </View>
            </LinearGradient>
            <View style={styles.Text}>
                <Text style={styles.love}>WHERE IS THE LOVE ?</Text>
                <Text style={styles.will}>Once you favorite a restaurant, it will appear here.</Text>
            </View>
        </View>
    )
}
export default Favourites
const styles = StyleSheet.create({
    img: {
        height:209,
        width:'73%',
    },
    love: {
        fontSize: 30,
        alignSelf: 'center',
        fontWeight: 'bold',
        color: 'black',
        marginVertical: 20
    },
    will: {
        fontSize: 15,
        alignSelf: 'center',
        color:'black'
    },
    linearGradient: {
        flex: 2,
    },
    Text: {
        flex: 2
    },
    im11: {
        marginHorizontal: 10,
        marginVertical: 40,
        flexDirection: 'row',
    },
    favorts: {
        fontSize: 20,
        bottom: 5,
        marginHorizontal: 10,
        color: 'white',
        fontWeight: '600',
    },
    border: {
        borderBottomWidth: 1,
        bottom: 20,
        width: '95%',
        alignSelf: 'center',
        borderColor: 'white',
    },
    im10:{
    marginHorizontal:27,
    marginVertical:35,
    },
    heart:{
        alignSelf:'center',
        marginVertical:30
    }
});