import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

//Import For Buttom OpenURL
import { useCallback } from "react";
import { Alert, Button, Linking, View } from "react-native";

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

  export default function AboutMe(){

    return(
    
          
          <View>
              <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
              <OpenURLButton url={unsupportedURL}>Open Unsupported URL</OpenURLButton>
              <Icon.Button 
                      name="facebook"
                      backgroundColor="#3b5998"
                      onPress={() => Linking.openURL('https://web.facebook.com/jaturon.muljan')}>
                      Facebook
                  </Icon.Button>
          </View>
      

    );



  }