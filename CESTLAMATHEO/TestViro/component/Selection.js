import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal, Alert, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';

export default class Selection extends React.Component {

    constructor(props) {
        super(props)

        let data = require('./../assets/tree_data.json')
        let renderedData = []
        let i = 0
        data.data.forEach(element => {
            let expo = element["Exposition "].join("")
            let pexpo = 0
            if (expo.includes("mi-ombre")) pexpo = 0.3
            else if (expo.includes("ensoleillée")) pexpo = 0.6
            else if (expo.includes("soleil")) pexpo = 0.9

            let phumidity = 0
            if (element["Humidité "].includes("normal")) phumidity = 0.5
            else if (element["Humidité "].includes("frai")) phumidity = 0.3
            else if (element["Humidité "].includes("humide")) phumidity = 0.1
            else if (element["Humidité "].includes("sec")) phumidity = 0.8
            console.log(props.route.params.Humidity, props.route.params.Ensoleillement)

            let opt = 1 - (Math.abs(props.route.params.Ensoleillement - pexpo) + Math.abs(props.route.params.Humidity - phumidity))
            renderedData.push({
                name: element.Nom,
                id: i++,
                url: element.ImgUrl,
                optimal: opt > 0 ? opt: 0
            })
        });

        console.log(renderedData.sort(function (a, b) {
            return b.optimal - a.optimal
        }))

        this.state = {
            selectedItem: {},
            modalVisible: false,
            Enseleillement: props.route.params.Enseleillement,
            Humidity: props.route.params.Humidity,
            trees: renderedData
        }
    }

    render() {

        return(
        <View>
            <Modal
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {this.setState({modalVisible: false})}}>
                <TouchableOpacity onPress={() => {this.setState({modalVisible: false})}} style={styles.modal}>
                    <View style={styles.centeredView}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalView}>
                                <Text>
                                    {this.state.selectedItem.name}
                                </Text>
                                <Text style={{marginTop: 15}}>
                                    pertinence: {this.state.selectedItem.optimal * 100}%
                                </Text>
                                <View style={{flexDirection: 'row', justifyContent: 'space-around', width: 250, marginTop: 30}}>
                                    <Button title="Visualiser"/>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                        
                    </View>
                </TouchableOpacity>
            </Modal>
            <FlatGrid
                itemDimension={130}
                data={this.state.trees}
                style={{marginTop: 30}}
               
                renderItem={({ item }) => (
                    <TouchableHighlight onPress={() => {
                        this.setState({selectedItem: item, modalVisible: true})
                    }}>
                        <View style={{backgroundColor: "black", shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 2,
                            },
                            shadowOpacity: 0.5,
                            shadowRadius: 2.62,
                            
                            elevation: 5}}>
                            <View style={{backgroundColor: `rgba(255,179,204, ${item.optimal})`, padding: 3}}
                            >
                                <Image
                                    style={{width: 159, height: 165}}
                                    source={{
                                        uri: item.url,
                                }}/>
                                <Text style={{color: "white", textAlign: "center", padding: 3}}>{item.name}</Text>
                            </View>
                        </View>
                        
                    </TouchableHighlight>
                   

                )}
            />
        </View>)
    }
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
    width: 280,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  })