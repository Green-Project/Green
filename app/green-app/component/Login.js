import { Button, View, Text } from 'react-native';
import React from 'react'

class Login extends React.Component {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <Button
                    title="Login"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        )
    }
}

export default Login