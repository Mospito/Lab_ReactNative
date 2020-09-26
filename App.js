// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Weather from './component/Weather'

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Weather zipCode="91110"/>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop:22,
//     // borderColor:'red',
//     // borderWidth:'red',
    
//   },
// });




import React from 'react';
import { StyleSheet,Text,View } from 'react-native';
import { NavigationContainer,DefaultTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './component/ZipCodeScreen';
import WeatherScreen from './component/WeatherScreen';
import AboutMeScreen from './component/AboutMeScreen';

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(235, 197, 196)',
  },
};

export default function App() {
  return (        
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="AboutMe" component={AboutMeScreen}/>
      </Stack.Navigator> 
    </NavigationContainer>       
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop:22,
      backgroundColor:'red'
      // borderColor:'red',
      // borderWidth:'red',
      
    }
});
