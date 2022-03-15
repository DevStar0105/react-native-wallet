import React from "react"
import { View } from "react-native"

import StartPage from "./src/components/auth/startpage"
import Login from "./src/components/auth/login"
import SignUp from "./src/components/auth/signup"
import RestorePassword from "./src/components/auth/restorepassword"

export default class App extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <RestorePassword />
      </View>
    )
  }
}