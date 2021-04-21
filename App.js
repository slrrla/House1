import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <flex style = {styles.Flex}>
        <Text style= {styles.Text}>방한칸 외계인</Text>
      </flex>
      
      <StatusBar style="auto" />
      

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Flex:{
    flex :1,
    backgroundColor :"7A4988"
  
    

  },
  Text:{
    textAlign:"left",
    Colors: "#fff"
  }
  

  
});
