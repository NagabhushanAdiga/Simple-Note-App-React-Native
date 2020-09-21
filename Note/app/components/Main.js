import React, { Component } from 'react';
import { StyleSheet, Text, View,ScrollView,TextInput,TouchableOpacity, Dimensions } from 'react-native';


import Note from "./Body";

export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            noteArray:[],
             noteText:"", 
        }
    }
  render(){
      let notes = this.state.noteArray.map((val,key)=>{
          return <Note  key={key} keyval={key} val={val}
              deleteMethod={()=>{
                this.deleteNote(key)}} /> 

      });
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Text style={styles.headertext}>Simple Note</Text>
    </View>
    <ScrollView style={styles.scrollview}>
            {notes}
    </ScrollView>
    <View style={styles.input}>
    <TextInput 
    style={styles.inputtext}
    placeholder="Add Someting Here"
    placeholderTextColor="white"
    underlineColorAndroid="transparent"
    onChangeText={(noteText)=>this.setState({noteText})}
    value={this.state.noteText}
    ></TextInput>
    </View>
    <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
    </TouchableOpacity>
    </View>
  );
}
addNote(){
    if(this.state.noteText){
        var d= new Date();
        this.state.noteArray.push({
            'date': d.getDate()+
            "/" +(d.getMonth()+1)+
            "/"+ d.getFullYear(),
            "note": this.state.noteText
        });
        this.setState({ noteArray: this.state.noteArray})
        this.setState({noteText:""});
    }
}
deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray})
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
      backgroundColor:"#19302F",
      borderBottomWidth:5,
      borderBottomColor:"#dc3545",
      height:40, 
      paddingBottom:80,
      width:Dimensions.get('window').width,
  },
  headertext:{
      color:"#fff",
      fontWeight:"bold",
      fontSize:20,
      marginTop:40,
      marginLeft:20,
  },
  scrollview:{
        flex:1,
        marginBottom:100,
  },
  input:{
      position:"absolute",
      bottom:0,
      left:0,
      right:0,
      zIndex:10,
  },
  inputtext:{
      alignSelf:"stretch",
      color:"#fff",
      padding:20,
      backgroundColor:"#19302F",
      borderTopWidth:2,
      borderTopColor:"#dc3545",
  },
  addButton:{
      position:"absolute",
      flexDirection:"row",
      zIndex:11,
      right:20,
      bottom:80,
      backgroundColor:"#19302F",
      width:70,
      height:70,
      elevation:8,
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center",
      borderColor:"#dc3545",
      borderWidth:3,

  },
  addButtonText:{
      color:"#fff",
      fontSize:25,
      fontWeight:"bold",
  },
});
