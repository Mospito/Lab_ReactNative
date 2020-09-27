"# Lab_ReactNative" 
# วิธีการนำ Icon มาใช้งาน
- ให้เราทำการติดตั้งก่อนโดยใช้คำสั่ง yarn add react-native-vector-icons
- หลังจากนั้นทำการ import มาใช้งาน 
``` import Icon from 'react-native-vector-icons/FontAwesome';  ```
ตรง /FontAwesome สามารถเป็นอย่างอื่นก็ได้ ตามในเว็ปนี้เลย https://oblador.github.io/react-native-vector-icons/
- ตัวอย่างการเขียนโปรแกรม
``` 
<Icon.Button 
            name="user"
            backgroundColor="#5E5D5E"
            onPress={() => navigation.navigate('AboutMe')}>
            AboutMe Touch Here!!
</Icon.Button> 
```

# วิธีการนำ TextTicker มาใช้งาน
- ให้เราติดตั้งโดยใช้คำสั่ง yarn add react-native-text-ticker
- ให้ทำการ import มาใช้งาน 
``` import TextTicker from 'react-native-text-ticker'; ```
- ศึกษาเพิ่มเติมได้ที่ https://www.npmjs.com/package/react-native-text-ticker
- ตัวอย่างการเขียนโปรแกรม
``` 
<TextTicker
    style={{ fontSize: 24 ,color:'white',paddingTop: 300,}}
    duration={3000}
    loop
    bounce
     repeatSpacer={50}
     marqueeDelay={1000}>

     6135512026 Jaturon Moonjan CoE 3

</TextTicker>
``` 
# วิธีการทำให้เปิด Link แล้ว Link ไม่เด้งไปหน้า Browser
- ติดตั้งโดยการ yarn add react-native-webview
- ทำการ import เข้ามา
```
import { WebView } from 'react-native-webview'
```
- ตัวอย่างCodeการเขียนหน้า FacebookPage
```
export default function FacebookPage() {
    return (
        <WebView source={{uri: 'https://web.facebook.com/jaturon.muljan'}}/>
        )
}
```
