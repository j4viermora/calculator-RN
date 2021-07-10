import { StyleSheet } from "react-native";

const theme = StyleSheet.create({
    background: {
        flex:1,
        backgroundColor: "black",
    },
    container:{
        flex: 1,
        paddingHorizontal: 10,
        justifyContent: "flex-end"
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 10,
        paddingHorizontal: 10
    },
    result:{
        fontSize: 60,
        color: "white",
        textAlign: "right",
        marginBottom: 5
    },
    lastResult:{
        color: "#a5a5a5",
        fontSize: 30,
        textAlign: "right"
    },
});


export {
    theme
}