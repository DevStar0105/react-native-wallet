import React from "react"
import { AppRegistry } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import StartPage from "./src/components/auth/startpage"
import Login from "./src/components/auth/login"
import SignUp from "./src/components/auth/signup"
import RestorePassword from "./src/components/auth/restorepassword"

import MyWallet from "./src/components/wallet/dashboard"
import { Colors } from "react-native/Libraries/NewAppScreen"

const Stack = createNativeStackNavigator()

export default class App extends React.Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="StartPage" component={StartPage} options={{title: "StartPage", headerShown: false}} />
          <Stack.Screen name="Login" component={Login} options={{title: "Login", headerShown: false}} />
          <Stack.Screen name="SignUp" component={SignUp} options={{title: "SignUp", headerShown: false}} />
          <Stack.Screen name="RestorePassword" component={RestorePassword} options={{title: "RestorePassword", headerShown: false}} />
          <Stack.Screen name="MyWallet" component={MyWallet} options={{title: "My Wallet", headerTitleStyle: {color: Colors.white}, headerStyle: {backgroundColor: "#00172B"}, headerTitleAlign: "center", headerLeft: null}} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

AppRegistry.registerComponent("wallet", () => App)