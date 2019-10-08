import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function App(){
    return (
    <View style={styles.container}>
        <View></View>
        <View></View>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text : {
        color: "black"
    }
})