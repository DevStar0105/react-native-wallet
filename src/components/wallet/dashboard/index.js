import React from "react"
import { StatusBar, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity, ToastAndroid } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import { HTTP_REQUEST_URL } from "../../config"
import Logo from "../../../assets/img/logo.png"

const validator = require("validator")

export default class Dashboard extends React.Component {
  state = {
    firstName: "",
    mail: "",
    password: "",
  }

  componentDidMount() {
    StatusBar.setHidden(true)
  }

  onChangeName = firstName => {
    this.setState({firstName})
  }

  onChangeEmail = mail => {
    this.setState({mail})
  }

  onChangePassword = password => {
    this.setState({password})
  }

  onSignUp = () => {
    if(this.isValidText()) {
      const { firstName, mail, password } = this.state
      HTTP_REQUEST_URL.post("/signup", {
        firstName,
        mail,
        password,
        lastName: firstName,
        phone: "1111111111"
      }).then(response => {
        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
        this.props.navigation.navigate("Login")
      }).catch(error => {
        console.log(error)
      })
    }
  }

  goLogin = () => {
    this.props.navigation.navigate("Login")
  }

  isValidText = () => {
    const { firstName, mail, password } = this.state
    if(!firstName) {
      alert("Please type your name")
      return false
    } else if(!mail) {
      alert("Please type your mail")
      return false
    } else if(!validator.isEmail(mail)) {
      alert("Please type your email correct")
      return false
    } else if(!password) {
      alert("Please type your password")
      return false
    } else {
      return true
    }
  }

  render() {
    return(
      <LinearGradient colors={['#331557', '#9B0594']} style={styles.container}>
        {/* <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput onChangeText={this.onChangeName} style={styles.inputText} placeholder="Name" placeholderTextColor="#777777" autoCapitalize="none" />
        <TextInput onChangeText={this.onChangeEmail} style={styles.inputText} placeholder="Email" placeholderTextColor="#777777" autoCapitalize="none" />
        <TextInput onChangeText={this.onChangePassword} style={styles.inputText} placeholder="Password" placeholderTextColor="#777777" autoCapitalize="none" secureTextEntry={true} />
        <TouchableOpacity><Text style={styles.loginBtn} onPress={this.onSignUp}>SIGN UP</Text></TouchableOpacity>
        <Text style={styles.not}>Already have an account? <Text style={styles.signup} onPress={this.goLogin}>Login</Text></Text> */}
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  },
  logoImage: {
    width: 170,
    height: 170,
    marginBottom: 10,
  },
  title: {
    color: "#ffffff",
    fontSize: 30,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  inputText: {
    width: Dimensions.get("window").width / 1.5,
    height: 50,
    backgroundColor: "#ffffff",
    fontSize: 20,
    fontFamily: "Roboto",
    padding: 10,
    paddingLeft: 20,
    margin: 10,
    borderRadius: 5
  },
  loginBtn: {
    width: Dimensions.get("window").width / 1.5,
    height: 50,
    fontSize: 20,
    fontFamily: "Roboto",
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    backgroundColor: "#001E39",
    color: "#ffffff",
    borderRadius: 5,
    marginTop: 20,
    marginBottom: 20
  },
  not: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "400",
    marginBottom: 50
  },
  signup: {
    color: "#00F3FC",
    fontWeight: "bold"
  }
})