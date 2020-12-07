import {View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            Air: 0,
            Humidity: 0,
            Ensoleillement: 0,
            tere: ""
        }
        this._evaluate = this._evaluate.bind(this)
    }

    _evaluate() {
        this.setState({
            airBar: Math.floor(Math.random() * Math.floor(100)),
            TerreBar: Math.floor(Math.random() * Math.floor(100)),
            EnsoleillementBar: Math.floor(Math.random() * Math.floor(100))
        })
    }

    render() {
        return (
            <View style={{padding: 40, flexDirection: 'column'}}>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center'}}>
                    <Text style={{fontWeight: "bold", color: "#9ACD32"}}>Type de sol</Text>
                </View>
                <Picker
                    selectedValue={this.state.terre}
                    style={{height: 50, width: "100%", color: "darkgray"}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({terre: itemValue})
                    }>
                    <Picker.Item label="terre argileuse" value="terre argileuse" />
                    <Picker.Item label="terre calcaire" value="terre calcaire" />
                    <Picker.Item label="terre sableuse" value="terre sableuse" />
                    <Picker.Item label="terre siliceuse" value="terre siliceuse" />
                    <Picker.Item label="terre tourbeuse" value="terre tourbeuse" />
                    <Picker.Item label="terre humifère" value="terre humifère" />
                </Picker>
                <Text style={{width: "100%", borderTopWidth: 1, borderColor: "#9ACD32", marginTop: 15}}></Text>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{fontWeight: "bold", color: "#9ACD32"}}>Ensoleillement</Text>
                </View>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={{color: "darkgray"}}>Peu ensoleillé</Text>
                    <Text style={{color: "darkgray"}}>Très ensoleillé</Text>
                </View>
                <Slider
                        style={{width: '100%', height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#9ACD32"
                        maximumTrackTintColor="#000000"
                    />
                <Text style={{width: "100%", borderTopWidth: 1, borderColor: "#9ACD32", marginTop: 15}}></Text>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{fontWeight: "bold", color: "#9ACD32"}}>Humidité</Text>
                </View>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={{color: "darkgray"}}>Peu d'humidité</Text>
                    <Text style={{color: "darkgray"}}>Très humide</Text>
                </View>
                <Slider
                        style={{width: '100%', height: 40}}
                        minimumValue={0}
                        maximumValue={1}
                        minimumTrackTintColor="#9ACD32"
                        maximumTrackTintColor="#000000"
                    />
                <Text style={{width: "100%", borderTopWidth: 1, borderColor: "#9ACD32", marginTop: 15}}></Text>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                    <Text style={{fontWeight: "bold", color: "#9ACD32"}}>Force des vents</Text>
                </View>
                <View style={{ textAlign: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                    <Text style={{color: "darkgray"}}>Très faibles</Text>
                    <Text style={{color: "darkgray"}}>Très forts</Text>
                </View>
                <Slider
                    style={{width: '100%', height: 40}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#9ACD32"
                    maximumTrackTintColor="#000000"
                />
                <Button
                    color="#9ACD32"
                    title="Valider"
                    onPress={() => this.props.navigation.navigate('Selection')}
                />
            </View>
        )
    }
    

}

const styles = StyleSheet.create({
        progressBar: {
        height: 20,
        backgroundColor: 'yellowgreen',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5
    }
});

export default Home