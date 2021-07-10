import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


interface Props {
    text: string
    color?: string
    width?: boolean
}

export const ButtonCalc = ( { text, color = "#2d2d2d", width  }:Props ) => {
    
    
    return (
        <TouchableOpacity>
           <View 
            style={ {
                ...styles.button,
                backgroundColor: color,
                width: ( width ) ? 170 : 80
            } } >
                    <Text style={{
                        ...styles.buttonText,
                        color: ( color === "#9b9b9b" ) ? '#0d0d0d' : '#fff'
                    }} 
                        > { text } </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: "#2d2d2d",
        borderRadius: 1000 ,
        height: 60,
        justifyContent: "center",
        marginHorizontal: 5,
        // padding: 10,
        width: 60,
    },
    buttonText: {
        color: "#0d0d0d",
        fontSize: 30,
        fontWeight: "300",
        textAlign: "center",
    }
});
