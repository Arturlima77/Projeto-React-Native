import React from 'react'

import {Image, StyleSheet, View} from 'react-native'
import Img from '../assets/foto.jpg'
const Img = () =>{
    return (
        <>
            <View style={styles.container}>
                <Image source={Img} style={styles.Img} />
            </View>
        </>
    )
}

export default Img;

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center'
    },
    Img:{
        width:100,
        height:100
    }
})