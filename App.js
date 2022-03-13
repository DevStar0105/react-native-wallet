import React from "react";
import { View, Text, TextInput, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"

import logo from './assets/img/logo.png'
import emailImg from "./assets/img/login/email.png"
import passwordImg from "./assets/img/login/password.png"

export default class App extends React.Component {
  state = {
    email: "",
    password: "",
  }

  onChangeTextEmail = (email) => {
    this.setState({email})
  }

  onChangeTextPassword = (password) => {
    this.setState({password})
  }

  onLogin = () => {
    const { email, password } = this.state
    if(this.IsValidText()) {
      alert("email: " + email + ", password: " + password)
    }
  }

  onSignUp = () => {
    
  }

  IsValidText = () => {
    const { email, password } = this.state
    if(email == "") {
      alert("Please type your email!")
      return false
    } else {
      if(password == "") {
        alert("Please type your password!")
        return false
      }
      return true
    }
  }

  render()
  {
    return(
      <View style={styles.container}>
        <KeyboardAwareScrollView contentContainerStyle={{flexGrow: 1, marginTop: 10, justifyContent: "center", alignItems: "center"}}>
          <View style={styles.login}>
            <Image source={logo} />
            <View>
              <Image source={emailImg} style={styles.inlineImg} />
              <TextInput style={styles.textinput} onChangeText={this.onChangeTextEmail} placeholder="Enter your email" autoCapitalize="none" />
            </View>
            <View>
              <Image source={passwordImg} style={styles.inlineImg} />
              <TextInput style={styles.textinput} onChangeText={this.onChangeTextPassword} placeholder="Enter your password" secureTextEntry={true} autoCapitalize="none" />
            </View>
            <View style={{marginTop: 10}}>
              <Text style={{fontSize: 15, color: "#ffffff"}}>Forgot password?</Text>
            </View>
            <View style={{flexWrap: "wrap"}}>
              <TouchableOpacity onPress={this.onLogin}>
                <Text style={styles.button}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onSignUp}>
                <Text style={styles.button}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  login: {
    backgroundColor: "#021c36",
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    padding: 50,
  },
  inlineImg: {
    alignSelf: "flex-start",
    position: "relative",
    zIndex: 99,
    width: 22,
    height: 22,
    left: 10,
    top: 31
  },
  textinput: {
    backgroundColor: "#ffffff",
    width: Dimensions.get("window").width / 1.5,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 40,
    paddingRight: 10,
    fontSize: 20,
  },
  button: {
    width: 100,
    padding:10,
    color: "#ffffff",
    backgroundColor: "#123456",
    marginTop: 20,
    borderRadius: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  }
})