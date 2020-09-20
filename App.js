import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Weather from './component/Weather'

export default function App() {
  return (
    <View style={styles.container}>
      <Weather zipCode="91110"/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:22,
    // borderColor:'red',
    // borderWidth:'red',
    
  },
});




// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ZipCodeScreen from './component/ZipCodeScreen';
// import WeatherScreen from './component/WeatherScreen';

// const Stack = createStackNavigator();

// export default function App() {
//   return (        
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={ZipCodeScreen} />
//         <Stack.Screen name="Weather" component={WeatherScreen} />
//       </Stack.Navigator> 
//     </NavigationContainer>       
//   );
// }

