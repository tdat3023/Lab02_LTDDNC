import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef  } from "react";
import { StyleSheet, 
        Text, 
        View , 
        Button, 
        ImageBackground,
        Image} from 'react-native';
import  img from './assets/background.png';
import  circle from './assets/circle.png';


export default function App() {
  const [text, setText] = useState('');
  
  return (
    <ImageBackground source={img} style={{width: '100%', height: '100%'}}>
    <View style={styles.container}>
      <View style={{alignItems: 'center',}}>
       <Image 
         source={circle}  
          style={{width: 150, 
                height: 150,
                marginBottom: 80,              
          }} 
        />
      
      </View>

      <View>  
        <Text style ={styles.title}>GROW YOUR BUSINESS</Text>
        <Text style ={styles.title}>We will help you to grow your business using online server</Text>
      </View>

      <View style={styles.fixToText} >
        <Button 
        title="Login" 
        style = {styles.button}
        color = 'yellow'
        ></Button>
      
        <Button 
        title="Sign Up"
        style = {styles.button}
        color = 'yellow'        
        ></Button>
      </View>
      
      <Text style ={styles.title}>HOW WE WORK?</Text>

    
      
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,     
    justifyContent: 'center',
    marginHorizontal: 20,

  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 20,
  },

  button: {
    width: 150, 
    height: 60,    
  },

  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },

  title: {
    textAlign: 'center',
    marginVertical: 8,
  },


 
});
