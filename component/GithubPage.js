import React, { Component } from 'react'
import { WebView } from 'react-native-webview'


export default function GithubPage() {


    return (
        <WebView source={{uri: 'https://github.com/Mospito/Lab_ReactNative'}}/>
        )
}
