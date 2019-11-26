import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Picker, TextInput, KeyboardAvoidingView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainScreen = () => 
{
  const [timer, setTimer] = useState(15);
  const [mood, setMood] = useState("available");


  return (
    <KeyboardAvoidingView 
      behavior="padding"
      keyboardVerticalOffset={64} 
      style={{flex: 1, alignItems: 'center'}}
    >
      <View style={styles.container}>
        <Picker
          selectedValue={mood}
          style={{height: 50, width: "100%"}}
          onValueChange={(itemValue, itemIndex) =>
            console.log("test")
          }>
          <Picker.Item label="Available" value="available" />
          <Picker.Item label="Busy" value="busy" />
        </Picker>

        <View style={{flexDirection: "row"}}>
          <Text>Time:</Text>
          <TextInput  
            style={{margin: 3}}
            placeholder="hours"  
            underlineColorAndroid='transparent'  
            keyboardType={'numeric'}
          /> 
          <TextInput  
            style={{margin: 3}}
            placeholder="minutes"  
            underlineColorAndroid='transparent'  
            keyboardType={'numeric'}
          /> 
        </View>
          
        <TouchableOpacity onPress={this._onPressButton} style={{backgroundColor: "#20D020", borderRadius: 8}}>
          <Text style={{fontSize: 40, padding: 9}}>
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}


MainScreen.navigationOptions = ({ navigation }) => ({
  title: "IRL Status Indicator",
})

const MainNavigator = createStackNavigator({
  Home: { 
    screen: MainScreen 
  }
});

export default createAppContainer(MainNavigator);

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
