import React from "react"
import { StatusBar, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

import Logo from "../../../assets/img/logo.png"

export default class StartPage extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true)
  }

  render() {
    return(
      <LinearGradient colors={['#001E39', '#F602EB']} style={styles.container}>
        <Image source={Logo} style={styles.logoImage} />
        <Text style={styles.title}>UltraNote Infinity</Text>
        <Text style={styles.description}>UltraNote Infinity encryped messaging and billing system with up 100MB file transfers.</Text>
        <TouchableOpacity><Text style={styles.loginBtn}>LOGIN</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.signupBtn}>SIGN UP</Text></TouchableOpacity>
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
    width: 200,
    height: 200,
    marginBottom: 70,
  },
  title: {
    color: "#ffffff",
    fontSize: 36,
    fontFamily: "Roboto",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    color: "#ffffff",
    fontSize: 18,
    fontFamily: "Roboto",
    textAlign: "center",
    paddingTop: 15,
    paddingLeft: 60,
    paddingRight: 60,
    paddingBottom: 20,
  },
  loginBtn: {
    width: 180,
    height: 60,
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    backgroundColor: "#001E39",
    color: "#ffffff",
    borderRadius: 5,
    marginTop: 20,
  },
  signupBtn: {
    width: 180,
    height: 60,
    fontSize: 24,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "700",
    backgroundColor: "#ffffff",
    color: "#001E39",
    borderRadius: 5,
    marginTop: 20,
  }
})