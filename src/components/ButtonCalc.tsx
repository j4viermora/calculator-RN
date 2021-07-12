import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'


interface Props {
    text: string;
    color?: string;
    width?: boolean;
    actionButton: ( textNumber: string ) => void 
}

export const ButtonCalc = ( { text, color = "#2d2d2d", width , actionButton }:Props ) => {
    
    
    return (
        <TouchableOpacity 
            // onPress={ actionButton }
            onPress={ () => actionButton( text ) }
            >
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
        borderRadius: 100 ,
        height: 80,
        justifyContent: "center",
        marginHorizontal: 5,
        // padding: 10,
        width: 80,
    },
    buttonText: {
        color: "#0d0d0d",
        fontSize: 30,
        fontWeight: "300",
        textAlign: "center",
    }
});
