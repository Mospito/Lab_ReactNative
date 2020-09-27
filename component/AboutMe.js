import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMD from 'react-native-vector-icons/Fontisto';
//Import For Buttom OpenURL
import { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";
import { useNavigation, useTheme, } from '@react-navigation/native';

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
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
      <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
      <Icon.Button name="facebook" backgroundColor="#3b5998" onPress={() => navigation.navigate('FacebookPage')}>
        Facebook
      </Icon.Button>

      <IconMD.Button  name="medium" backgroundColor="black" onPress={() => navigation.navigate()}>
        Medium
      </IconMD.Button>

      <IconMD.Button  name="youtube-play" backgroundColor="red" onPress={() => navigation.navigate()}>
        Youtube
      </IconMD.Button>
    </View>


  );



}