import React, { Component } from 'react'
import { WebView } from 'react-native-webview'


export default function YoutubePage() {


    return (
        <WebView source={{uri: 'https://www.youtube.com/watch?v=A_EgM2Lo9bg&t=6s'}}/>
        )
}
