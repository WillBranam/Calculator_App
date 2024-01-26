/* Will Branam - CalculatorApp
- an app that functions as a calculator
limitations:
- there no memory of older equations
- the clear button erases the entire equation
- the square function is displayed as **2 instead of ^2
- input text will no stretch across the entire screen

Known bugs/issues:
- app will output infinity for a non-zero number divided by zero
- app will output NaN for 0/0
- infinity with any operation or number will crash app
- app will add input to the result of equation : 2 + 2 = 4  -> **user presses 2** -> 42

Functionality/use of app:
- the app can multiply, divide, subtract, and add
- the app remembers the last operation when the user inputs again
- it can clear the screen

Code sections:
- from lines 36 to 41 are imports
- from line 43-83 is my interface
- each row is nested in a different view
- the view at the top is used to contain all the rest of the view
- I used to have an "onClick" method but replaced it with the set-state array function
- I used the eval function for the "=" button so that It turns the equation from text
- into the sum of whatever is in the result variable
- the styles at the bottom are labeled for their uses
- the Views are arranged so that each group of four buttons is a row
- errorHandler is used to catch any errors from user inputs with a try-catch

Additional features:
- I added working decimal point, square, and parenthesis in a new row
*/

import { black } from 'ansi-colors';
import { StatusBar } from 'expo-status-bar';
import { result } from 'lodash';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';

export default function App() {
  const [result, setResult] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <Text style={styles.textBoxText}>{result}</Text>
      </View>
        <View style={styles.body}>
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'\(')}} ><Text style={styles.buttonText}>(</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'\)')}} ><Text style={styles.buttonText}>)</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'.')}} ><Text style={styles.buttonText}>.</Text></TouchableOpacity>
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'**2')}} ><Text style={styles.buttonText}>^2</Text></TouchableOpacity>  
        </View>{/*first row*/}
        <View style={styles.body}>
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'1')}} ><Text style={styles.buttonText}>1</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'2')}} ><Text style={styles.buttonText}>2</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'3')}} ><Text style={styles.buttonText}>3</Text></TouchableOpacity>
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'/')}} ><Text style={styles.buttonText}>/</Text></TouchableOpacity>  
        </View>{/*second row*/}
        <View style={styles.body}>
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'4')}} ><Text style={styles.buttonText}>4</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'5')}} ><Text style={styles.buttonText}>5</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'6')}} ><Text style={styles.buttonText}>6</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'*')}}><Text style={styles.buttonText}>*</Text></TouchableOpacity> 
        </View>{/*third row*/}
        <View style={styles.body}>
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'7')}}  ><Text style={styles.buttonText}>7</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'8')}}  ><Text style={styles.buttonText}>8</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'9')}} ><Text style={styles.buttonText}>9</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'-')}} ><Text style={styles.buttonText}>-</Text></TouchableOpacity> 
        </View>{/*fourth row*/}
        <View style={styles.body}>
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult('')}}  ><Text style={styles.buttonText}>C</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.buttonStyle} onPress={() => {setResult(result+'0')}}  ><Text style={styles.buttonText}>0</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(errorHandler(result))}} ><Text style={styles.buttonText}>=</Text></TouchableOpacity> 
          <TouchableOpacity  style={styles.operationButtonStyle} onPress={() => {setResult(result+'+')}}  ><Text style={styles.buttonText}>+</Text></TouchableOpacity> 
        </View>{/*fifth row*/}
      </View>
  );//return
}//export default function App()

function errorHandler(result) {
  var output ='';
  try{
    output = String(eval(result));
  } catch (error) {
    output = "Error";
  }//catch
  return(output);
}//errorHandler


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    backgroundColor: 'white',
    padding: 80,
    textShadowColor: 'black',
    flex: 3,
  },
  textBox: {
    fontWeight: 'bold',
    borderColor: 'orange',
  },
  body: {
    flexDirection: 'row',
    color: 'orange',
    flex: 1,
  },
  buttonStyle: {
    backgroundColor: 'skyblue',
    color: 'black',
    flex: 10,
    height: 100,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',  
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },//for buttons
  operationButtonStyle: {
    backgroundColor: 'steelblue',
    color: 'black',
    flex: 10,
    height: 100,
    fontSize: 50,
    alignItems: 'center',
    justifyContent: 'center',  
    padding: 5,
    borderColor: 'black',
    borderWidth: 1,
  },//for buttons that are not numbers
  buttonText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  headerText: {
    fontSize: 20,
  },
  textBoxText: {
    fontSize: 40,
    fontWeight: 'bold',
  }
});// styles