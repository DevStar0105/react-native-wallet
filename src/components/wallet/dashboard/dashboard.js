import React from "react"
import { View, Text } from "react-native"

export default class Dashboard extends React.Component {
    render() {
        return(
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <Text>Dashboard</Text>
            </View>
        )
    }
}