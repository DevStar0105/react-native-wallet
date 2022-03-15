import React from "react"
import { StatusBar, Text, TextInput, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import Logo from "../../../assets/img/logo.png"

export default class RestorePassword extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return(
      <LinearGradient colors={['#001E39', '#9B0594']} style={styles.container}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.title}>RESTORE PASSWORD</Text>
        <TextInput style={styles.inputText} placeholder="E-mail address" placeholderTextColor="#777777" autoCapitalize="none" />
        <Text style={styles.reset}>You will receive email with password reset link</Text>
        <TouchableOpacity><Text style={styles.loginBtn}>SEND INTRUCTIONS</Text></TouchableOpacity>
        <Text style={styles.not}>Already have an account? <Text style={styles.signup}>Login</Text></Text>
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
    marginBottom: 50,
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
  reset: {
    color: "#00F3FC",
    fontSize: 18,
    fontFamily: "Roboto",
    fontWeight: "400",
    textAlign: "center",
    paddingLeft: 50,
    paddingRight: 50,
    marginBottom: 70,
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