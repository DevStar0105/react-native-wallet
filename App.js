import React from "react"
import { View } from "react-native"

import StartPage from "./src/components/auth/startpage"

export default class App extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <StartPage />
      </View>
    )
  }
}