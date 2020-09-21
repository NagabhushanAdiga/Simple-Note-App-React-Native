import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon  from "react-native-vector-icons/MaterialIcons";

export default class Body extends Component{
  render(){
  return (
    <View style={styles.note} key={this.props.keyval}>
        <Text style={styles.notetext}>***  {this.props.val.date}</Text>
        <Text style={styles.notetext}>***  {this.props.val.note}</Text>
        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.notedelete}>
        <Icon name="delete" size={30} style={styles.notedeletetext}/>
        </TouchableOpacity>

    </View>
  );
}
}

const styles = StyleSheet.create({
    note: {
        position:"relative",
        padding:20,
        paddingRight:100,
        borderBottomWidth:2,
        borderBottomColor:"#fff",
  },
  notetext:{
      paddingLeft:20,
      borderLeftWidth:10,
      borderLeftColor:"#fff",
      borderRadius:5,
      fontSize:17,


  },
  notedelete:{
      position:"absolute",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#fff",
      padding:10,
      top:10,
      bottom:10,
      right:10,
  },
  notdeletetext:{
      color:"#fff",
  },
});