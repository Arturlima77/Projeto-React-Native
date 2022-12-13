import React from 'react'

import {Image, StyleSheet, View} from 'react-native'
import img from '../assets/foto.jpg'
const Img = () =>{
    return (
        <>
            <View style={styles.container}>
                <Image source={img} style={styles.img} />
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
    img:{
        width:100,
        height:100
    }
})