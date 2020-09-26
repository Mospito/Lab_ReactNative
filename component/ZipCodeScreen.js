import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList,TouchableHighlight,StyleSheet,ImageBackground} from 'react-native';
import { useNavigation,useTheme, } from '@react-navigation/native';



const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight   activeOpacity={1} underlayColor= "red"     onPress={() => navigation.navigate('Weather', { zipCode: code })}>
           
         <View style={styles.fontPattle}> 
             <Text style={styles.textStart}>{place}</Text> 
             <Text style={styles.textEnd}>{code}</Text>
        </View>
           
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    
    return (
        <View>
            <ImageBackground source={require('../catbod.jpg')} style={styles.BG}>
                <FlatList style={styles.crop}
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
                />
                <StatusBar style="auto" />
            </ImageBackground>
            
        </View>
    );

}

const styles = StyleSheet.create({
    crop:{
        
        backgroundColor:'black',
        opacity:0.5,  
    },
    BG:{
        
        width:'100%',
        height:'100%'
        
    },
    fontPattle:{
        color:'white',
        padding:10,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        margin:30,
    },
    textStart:{
        alignItems:'flex-start',
        color:'#f1c5c4',
        fontSize:25,
    },
    textEnd:{
        alignItems:'flex-end',
        color:'#c49770',
        fontSize:25,
        
    },

});