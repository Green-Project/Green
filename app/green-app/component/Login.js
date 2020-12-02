import { Button, View, Text, Image , TextInput} from 'react-native';
import React from 'react'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'

class Login extends React.Component {
    render() {
        return (
            <View style={{position: "absolute" , flexDirection: 'column', top: 0, bottom: 0, left: 0, right: 0, textAlign: 'center'}}>
                <View style={{justifyContent: 'flex-end', bottom: 0, position: "absolute", width: "100%"}}>
                    <Image 
                    style={{ alignSelf: 'stretch', flex: 1, resizeMode: 'cover', width: 'auto' }}
                    source={require('./../assets/loginfooter.png')} />

                </View>
                <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                    placeholder="  username" 
                    style={{ width: "60%", borderWidth: 1, borderRadius: 15, padding: 5}}
                        />
                </View>
                <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                    placeholder="  password"
                    caretHidden
                    style={{ width: "60%", borderWidth: 1, borderRadius: 15, padding: 5}}
                        />
                </View>

                <View style={{marginTop: 50, flexDirection: 'row', justifyContent: 'center'}}>
                    <Button
                             color="#9ACD32"
                            title="Se connecter"
                            onPress={() => this.props.navigation.navigate('Home')}
                        />
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                    <Text>Ou se connecter avec:</Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 15}}>
                    <Image source={require('./../assets/twitter.png')}/>
                    <Image source={require('./../assets/facebook.png')}/>
                    <Image source={require('./../assets/google.png')}/>
                </View>



            </View>
        )
    }
}

export default Login