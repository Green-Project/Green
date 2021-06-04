import React from 'react';
import { View, Text, ImageBackground, Animated, Modal, StyleSheet, TouchableOpacity, Dimensions, Button } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";

const {width, height} = Dimensions.get("window");
const ITEM_W = width*0.76;
const ITEM_H = height/1.5;

class Selection extends React.Component {
  state= {
    iamgered: null,
    error: null,
    isLoading: true,
    isVisible: false,
};
displayModal(show){
  this.setState({isVisible: show})
}
  render() {
    const list = this.props.list;
    const scrollX = this.props.scrollX
    const index = this.props.index
    const inputRange = [
      (index - 1) * width,
      (index + 1 ) * width,
    ];
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange : [-width*0.7 , width *0.7],
      extrapolate : 'clamp',
    })
    return(
        <TouchableOpacity  onPress={() => {
            this.displayModal(true); }}>
            <Modal
              animationType = {"slide"}
              transparent={false}
              visible={this.state.isVisible}
              onRequestClose={() => {
                this.displayModal(false);
              }}>
            <ImageBackground
                source={{uri: list.url}}
                style = { styles.modalimage }>
            <View style ={styles.modalview}></View>
            </ImageBackground>
                <Text style= {{fontSize: 20, textAlign: 'center'}}>
                    {list.name}
                </Text>
                <Text style= {{fontSize: 15, marginTop: 15, textAlign: 'center', textDecorationLine: 'underline'}}>
                    pertinence: {list.optimal * 100}%
                </Text>
                <View style={{flexDirection: 'row', justifyContent: 'center', width: width, marginTop: 30}}>
                    <Button disabled title="Visualiser"/>
                </View>
            </Modal>
        <Animated.View style = {styles.container}>
          <View style = {{
              borderRadius: 18,
              elevation : 10,
              borderRadius: 18,
              top : 15,
              padding: 12,
              backgroundColor: 'white',
            }}>
            <View style = {{
                width : ITEM_W,
                height: ITEM_H,
                overflow: 'hidden',
                alignItems: 'center',
                borderRadius: 10,
                justifyContent: 'flex-end',
            }}>
              <Animated.Image
                source={{uri: list.url}}
                style = {{
                    width: ITEM_W *1.4,
                    height: ITEM_H,
                    resizeMode: 'cover',
                    transform : [
                        {
                            translateX,
                        },
                    ],
                }}
                />
             <View style = {styles.textname}>
                 <Text style ={{color :'black'}}>{list.name}</Text>
            </View>
            </View>
          </View>
      </Animated.View>
    </TouchableOpacity>
     )
    }
  };
  const styles = StyleSheet.create({
      container: {
          width : width,
          top: 80,
          justifyContent: 'center',
         alignItems: 'center',
    },
    textname: {
        position: 'absolute',
        alignSelf : 'flex-start',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        bottom: 10,
        left: 10,
    },
    modalimage: {
        width: Dimensions.get('window').width,
        height: 300,
        justifyContent: 'center', alignSelf: 'center'
      },
      modalview: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: Dimensions.get('window').width,
        borderRightWidth: 0,
        borderBottomWidth: 100,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: '#fff',
      },
    icon: {
      backgroundColor: "rgba(0,0,0,0.5)", 
      alignSelf: 'flex-start',
      color : 'white',
    },
    titletext: {
      fontSize: 25,
      backgroundColor: "rgba(0,0,0,0.5)", 
      alignSelf: 'flex-start',
      fontWeight: "700",
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    dureetext: {
      fontSize: 15,
      backgroundColor: "rgba(0,0,0,0.5)", 
      alignSelf: 'flex-start',
      fontWeight: "700",
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
    },
    description_titre: {
      textAlign: 'center',
      width: '100%',
      fontWeight: '700',
      fontSize: 20,
  },
  eventend : {
    fontSize: 13,
    margin: 5,
    alignSelf: 'flex-start',
    backgroundColor: "rgba(255,255,255,0.5)", 
    color: 'black',
  },
  description_event: {
    margin : 5,
    width: "90%",
    fontSize: 13,
    textAlign: 'center',
  },
  titleText: {
      fontSize: 18,
      backgroundColor: "rgba(0,0,0,0.5)", 
      alignSelf: 'flex-start',
      fontWeight: "700",
      color: 'white',
      margin : 5,
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
  },
  rdstyles: {
      fontSize: 16,
      backgroundColor: "rgba(255, 255, 255, 0.8)", 
      alignSelf: 'flex-start',
      fontWeight: "500",
      margin : 5,
      color: 'black',
      
  },
  typestyles: {
      fontSize: 15,
      backgroundColor: "#00bcd4", 
      alignSelf: 'flex-start',
      fontWeight: "500",
      margin : 5,
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
  },
  close: {
    position: "absolute",
    width: 49,
    height: 55,
    borderRadius:10,
    backgroundColor: 'rgba(0,0,0, 0.2)',
    color: "white",
    marginTop: 5,
    marginLeft: 5,
  },
  modalimage: {
    width: Dimensions.get('window').width,
    height: 300,
    justifyContent: 'center', alignSelf: 'center'
  },
    catstyle: {
      fontSize: 15,
      backgroundColor: "rgba(0,188,212,1)", 
      alignSelf: 'flex-start',
      fontWeight: "700",
      color: 'white',
      textShadowColor: 'rgba(0, 0, 0, 1)',
      textShadowOffset: {width: -1, height: 1},
      textShadowRadius: 10,
      marginBottom: 5,
      margin : 5,
    },
});

export default Selection;