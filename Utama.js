import React from 'react';
import { StyleSheet,Text, View, TextInput, TouchableHighlight, Button,Image } from 'react-native';
export default class AboutMe extends React.Component {
Login= () =>{this.props.navigation.navigate('Login')}
Daftar= () =>{this.props.navigation.navigate('Daftar')}
  render() {
      return (
      <View style={styles.vMain}>
      <View style={styles.box1}>
          <Image
              style={styles.foto}
              source={require("./Undiksha.png")}
              style={{width:'150%',height:'60%'}}
              resizeMode = "stretch"
          />
      <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>Login</Text>
                  </TouchableHighlight>
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Daftar()}>
                  <Text style={styles.txtButton}>Daftar</Text>
                  </TouchableHighlight>
                </View>
      </View>
      </View>
  );
}
}
const styles = StyleSheet.create({
vMain:{
  flex: 1,
  backgroundColor: '#00008B',
},
vHeader: {
  flex: 0.1,
  backgroundColor: '#00ffff',
  alignItems: 'center',
  justifyContent: 'center',
},
box1: {
  flex: 1,
  paddingTop: 20,
  marginTop: 10,
  alignItems: 'center',
  justifyContent: 'center',
},
box2: {
  flex: 1,
  margin:10,
  flexDirection: 'column',
  justifyContent: 'space-around',
},
txtButton: {
  textAlign: 'center',
  marginTop: 10,
  color: 'black',
  fontSize: 20,
  width: '100%',
  height: 40,
},
vButton: {
  justifyContent: 'center',
  backgroundColor: '#00ffff',
  borderRadius: 5,
  padding:25,
  margin:30,
  width: '30%',
  height: 50,
},
Text:{
  marginTop: 10,
  borderWidth: 3,
  padding: 5,
  fontSize:13,
  color: 'white',
},
foto:{
  height: 200,
  width: 150,
  borderRadius: 7,
  borderWidth: 3,
},
});
