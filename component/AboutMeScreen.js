import React from 'react';
import { View } from 'react-native';
import AboutMe from './AboutMe';
import { StatusBar } from 'expo-status-bar';

export default function WeatherScreen() {    
    return (
        <View>
            <AboutMe />
            <StatusBar style="auto" />
        </View>
    );
}
