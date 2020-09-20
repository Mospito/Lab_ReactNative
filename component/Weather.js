import React, { useState,useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'

export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0
    })

    useEffect(() => {
        
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {              
   
   fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=${apiKey}`)
                   .then((response) => response.json())
                   .then((json) => {
                       setForecastInfo({
                           main: json.weather[0].main,
                           description: json.weather[0].description,
                           temp: json.main.temp
                       });
                   })
                   .catch((error) => {
                       console.warn(error);
                   });
           }
       }, [props.zipCode])
   

    return (
        <View>
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
                
                    <View style={styles.cover}>
                        <Text style={styles.textcolor}>Zip Code is {props.zipCode}</Text>
                        <Forecast {...forecastInfo} />
                    </View>
                    
               

            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    crop: {
        margin: 30,

    },
    textcolor: {
        color: 'white',
        fontSize:20,
    },
    cover: {
        
        backgroundColor: 'black',
        height:300,
        width:'100%',
        opacity:0.4,
        alignItems:'center',
        
    }
});