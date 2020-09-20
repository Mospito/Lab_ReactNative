import React from 'react';
import { View, Text ,StyleSheet} from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.crop}>
            <Text style={styles.textstyle}>{props.main}</Text>
            <Text style={styles.textdes}>{props.description}</Text>
            
                <Text style={styles.texttmp}>{props.temp}<Text >°C</Text>
                </Text>
            
            
        </View>
    );
}

const styles = StyleSheet.create({

    textstyle:{
      fontSize:35,
      color:'white',
      padding:20,
    },
    textdes:{
        fontSize:30,
        color:'white',
        padding:20,
    },
    texttmp:{
        fontSize:20,
        color:'white',
        padding:20,
    },
    crop:{
        alignItems:'center',
    }
});