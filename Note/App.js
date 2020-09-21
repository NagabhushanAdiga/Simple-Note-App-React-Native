import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./app/components/Main";

export default class App extends Component{
  render(){
  return (
    <View style={styles.container}>
      <Main />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:"center",
    justifyContent:'center',
  },
});