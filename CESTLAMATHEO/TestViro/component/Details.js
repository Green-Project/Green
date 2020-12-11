import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

export default class Details extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            name: props.route.params.name,
            url: props.route.params.url,
            percent: props.route.params.percent,
        }
    }

    render() {
        return(
            <View>
                <Text>Details {this.state.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column"
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0"
    }
  });