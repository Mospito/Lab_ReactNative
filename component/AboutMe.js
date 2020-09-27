import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMD from 'react-native-vector-icons/Fontisto';
import { useCallback } from "react";
import { Alert, Button, Linking, View, ImageBackground, StyleSheet } from "react-native";
import { useNavigation, useTheme, } from '@react-navigation/native';
import TextTicker from 'react-native-text-ticker'

const supportedURL = "https://google.com";
const unsupportedURL = "slack://open?team=123456";

const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default function AboutMe() {
  const navigation = useNavigation()

  return (


    <View>
      <ImageBackground source={require('../jack.jpg')} style={styles.blackdrop}>
        <View style={styles.setItem}>
          {/* <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
          <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton> */}
          <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => navigation.navigate('FacebookPage')}>
            Facebook
          </Icon.Button>

          <IconMD.Button name="medium" backgroundColor="black" onPress={() => navigation.navigate('MediumPage')}>
            Medium
          </IconMD.Button>

          <IconMD.Button name="youtube-play" backgroundColor="red" onPress={() => navigation.navigate('YoutubePage')}>
            Youtube
          </IconMD.Button>

          <IconMD.Button name="github" backgroundColor="black" onPress={() => navigation.navigate('GithubPage')}>
            Github
          </IconMD.Button>
          <TextTicker
            style={{ fontSize: 24 ,color:'white',paddingTop: 300,}}
            duration={3000}
            loop
            bounce
            repeatSpacer={50}
            marqueeDelay={1000}
          >
            6135512026 Jaturon Moonjan CoE 3 
          </TextTicker>
        </View>
      </ImageBackground>
    </View>


  );



}

const styles = StyleSheet.create({

  blackdrop: {
    width: '100%',
    height: '100%',


  },
  setItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    opacity: 0.6,

  },




});