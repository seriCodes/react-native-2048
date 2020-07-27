/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Alert,
   TouchableWithoutFeedback,
} from 'react-native';

 
import {score} from './utilities/functions'
 
import {UtilsProvider} from './utilities/utilsContext';
import {UtilsComponent} from './utilities/UtilsComponent';

  import {GameGrid} from './components/GameGrid';

import {createEmptyGameArray,gameArray} from './utilities/functions';

 
let cellsPerRow=4;

 
const styles = StyleSheet.create({
  newGameButton: {
    marginTop: 15,
    marginBottom: 15,
     borderRadius: 3,
    marginLeft: 90, 
    width: 185,

},
score:{
  marginTop: 15,
  marginBottom: 15,
   borderRadius: 3,
  marginLeft: 90, 
  width: 185,
  backgroundColor:'#B8860B',
  paddingTop:20,
  display:"flex", 
justifyContent: "center",
alignItems: "center",  
paddingBottom:20,

},
title: {
  fontSize: 65,
  fontWeight: 'bold',
  margin: 0,
  marginLeft: 90, 

  display: 'flex',
  color: '#8c8c8c'
  
},
   engine: {
    position: 'absolute',
    right: 0,
  },
   sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },  
}); 


const App: () => React$Node = () => {
  const [newGame,setNewGame]=useState(true)
   return (
    <>

    <Text style={styles.title}>2048</Text>


    <View style={styles.newGameButton}
    >
    <Button
    title="New Game"
     onPress={() =>
      {
        Alert.alert('start NEW')
        
        setNewGame(!newGame)
      } }
    color="#8f7a66"
    
  />
  </View>

    <UtilsProvider> 
    <UtilsComponent></UtilsComponent>
    <View> 
    <GameGrid key={newGame} scoreRestart={newGame} cellsRowAmount={cellsPerRow}> </GameGrid> 
    </View>
    </UtilsProvider> 
    </>
  );
}; 

export default App;
 