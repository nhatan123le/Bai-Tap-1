import { View, Text,ImageBackground, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [userName, setUserName] = useState('');
  const [passWord, setPassWord]= useState('');
  const handleAlert= ()=>{
      Alert.alert(`UserName: ${userName}${'\n'}PassWord: ${passWord}`)
  }
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1,justifyContent:'center'}} source={{uri:'https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-3-2.jpg'}} resizeMode="cover">
          <View style={{marginHorizontal:10}}>
            <Image source={{uri:'https://logodix.com/logo/1950656.jpg'}} height={250} resizeMode='cover'></Image>
            <Text style={[style.text,{textAlign:'right',fontSize:23}]}>REGISTER</Text>
            <View>
                <TextInput value={userName} onChangeText={setUserName} style={style.textInput} placeholder='USERNAME...'></TextInput>
                <TextInput secureTextEntry value={passWord} onChangeText={setPassWord} style={style.textInput} placeholder='PASSWORD...'></TextInput>
                <TouchableOpacity onPress={()=>handleAlert()} style={{backgroundColor:'red',padding:10}}>
                    <Text style={style.text}>LOGIN</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ImageBackground>
    </View>
  )
}
const style = StyleSheet.create({
  textInput:{
    backgroundColor:'gray',
    borderWidth:1,
    borderColor:'white'
  },
  text:{
    textAlign:'center',
    fontWeight:'bold'
  }
})

export default App