import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.yellowView}>
        <Text>Hello</Text>
    </View>
      <View style={styles.buleView}>
        <Text>Hello</Text>
      </View>
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

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   yellowView: {
//     flex: 1,
//     backgroundColor: "yellow"
//   },
//   buleView: {
//     flex: 5,
//     backgroundColor: "blue"
//   }
// });
