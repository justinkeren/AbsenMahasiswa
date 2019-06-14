import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert} from "react-native";
class Login extends Component {
  static navigationOptions = {
      header: null
  }
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',

      };
    }
    Login= () =>{
      if(this.state.username == 'Shodiq' && this.state.password == 'damanhury'){
        this.props.navigation.navigate('Home')
      }else{
        Alert.alert('Masukan Username dan Password dengan Benar!!!');
    }
  }
  render() {
      return (
        <View style={styles.vMain}>
            <View style={styles.vHeader}>
                <Text>Shodiq Damanhuri 1715051081</Text>
            </View>
        <ScrollView>
               	<View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="User Name atau Email"
                  onChangeText={username => this.setState({ username})}
                  />
                </View>
                <View style={styles.box1}>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>LOGIN</Text>
                  </TouchableHighlight>
                </View>
        </ScrollView>
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
      flex: 0.2,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',

    },
    box1: {
      flex: 0.5,
      width: "90%",
      marginTop: 10,
      marginLeft:20,
      paddingTop: 10,
      justifyContent: 'center',
      flexDirection: 'row'
    },
    txtBox1: {
      width: 250,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#000000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textBox1:{
      color: 'white',
      fontSize: 15,
    },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'white',
      fontSize: 20,
      width: '100%',
      height: 40,
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00ffff',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '50%',
      height: 50,
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});
export default Login;
