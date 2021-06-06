import React from 'react';
import { Text, View, Image, TouchableHighlight, Modal, Animated, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, Dimensions} from 'react-native';
import { FlatGrid } from 'react-native-super-grid';
import Selection from './SelectionComp';
const {width, height} = Dimensions.get("window");
export default class SelectionClass extends React.Component {

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
        const scrollX = new Animated.Value(0);
        return (
            <View style={styles.container}>
                <View  style={{height:Dimensions.get("window").height, width:Dimensions.get("window").width, backgroundColor: "rgba(255,255,255,1)", elevationn : 10}}>
                    <Animated.FlatList
                        data = {this.state.trees}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator= {false}
                        onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                        {useNativeDriver : true}
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item, index}) => <Selection list={item} index={index} scrollX={scrollX} />}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width : width,
        justifyContent: 'center',
        alignItems: 'center',
    },
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