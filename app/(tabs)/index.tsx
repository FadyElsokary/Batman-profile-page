import React from "react";
import { Text, StyleSheet, View, Image, SafeAreaView } from 'react-native';



export default function App()  {

  return (
    <SafeAreaView style = {styles.titleContainer}>
      <View style ={styles.container1}>
        <Image source={require('../../assets/images/batman-avatar.png')}/>
        <Text style={{fontSize: 40}}>I am Batman!</Text>
      </View>

      <View style ={styles.container2}>
        
        <View style = {styles.item}>
        <Text style ={styles.label}>Name:</Text>
        <Text style ={styles.data}>Batman</Text>
        </View >

        <View style = {styles.item}>
        <Text style ={styles.label}>City:</Text>
        <Text style ={styles.data}>Gotham</Text>
        </View >

        <View style = {styles.item}>
        <Text style ={styles.label}>Fav Color:</Text>
        <Text style ={styles.data}>Black</Text>
        </View >

        <View style = {styles.item}>
        <Text style ={styles.label}>job:</Text>
        <Text style ={styles.data}>Batting</Text>
        </View >
        
      </View>

    </SafeAreaView>

  );
}



const styles = StyleSheet.create({
  titleContainer: {
    flex:1,
    flexDirection: "column",

  },
  container1:{
    flex: 1,
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor:'#1D3D47',
    borderBottomWidth: 2,
  },
  container2:{
    flex: 1.2,
    alignItems: 'center',
    justifyContent:"center",
  },
  item: {
    flex: 1,
    //justifyContent: "center", // Vertically centers content
    borderBottomWidth: 2,
    borderColor: "black", // Unified border color
    paddingHorizontal: 10, // Adds space from left/right edges
    alignSelf: "stretch", // Ensures it spans full width
    flexDirection: "row",
    alignItems:'center'
  },
  label:{
    flex:0.8,
    color: 'orange',
    fontSize:32,
    
  },

  data:{
    fontSize:32,
  },
  
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

