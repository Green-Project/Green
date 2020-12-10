import { Button, View, Text, Image , TextInput} from 'react-native';
import React from 'react'
import ImageResizeMode from 'react-native/Libraries/Image/ImageResizeMode'
import {Dimensions } from "react-native";

class Login extends React.Component {
    
    render() {
        return (
            <View style={{position: "absolute" , flexDirection: 'column', top: 0, bottom: 0, left: 0, right: 0, textAlign: 'center'}}>
                <View style={{justifyContent: 'flex-end', bottom: 0, position: "absolute", width: "100%"}}>
                    <Image 
                    style={{ alignSelf: 'stretch', resizeMode: 'cover', width: Math.round(Dimensions.get('window').width), height: 300 }}
                    source={require('./../assets/hills-and-sakura-tree.png')} />

                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <Image
                style = {{alignSelf: 'stretch', resizeMode: 'stretch', width: Math.round(Dimensions.get('window').width * 0.7), height: 80, marginTop: 40}}
                    source={require('./../assets/sakura_no_tree.png')}
                />
                </View>
  
                <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                    placeholder="  username" 
                    style={{ width: "60%", borderWidth: 1, borderRadius: 15, padding: 5}}
                        />
                </View>
                <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                    <TextInput
                    placeholder="  password"
                    caretHidden
                    style={{ width: "60%", borderWidth: 1, borderRadius: 15, padding: 5}}
                        />
                </View>

                <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'center'}}>
                    <Button
                             color="#FFB3CC"
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