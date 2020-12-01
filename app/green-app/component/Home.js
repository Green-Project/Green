import {View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            airBar: 0,
            TerreBar: 0,
            EnsoleillementBar: 0
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
            <View style={{padding: 40}}>
                <Button
                    color="#9ACD32"
                    title="Examiner le terrain"
                    onPress={this._evaluate}
                />
                <Text style={{marginTop: 60}}>Air</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey', borderRadius: 5, borderWidth: 1}}>
                    <Text style={[styles.progressBar, {width: this.state.airBar.toString() + '%'}]} ></Text>
                </View>
                <Text style={{marginTop: 60}}>Terre</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey', borderRadius: 5, borderWidth: 1}}>
                    <Text style={[styles.progressBar, {width: this.state.TerreBar.toString() + '%'}]} ></Text>
                </View>
                <Text style={{marginTop: 60}}>Ensoleillement</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey', borderRadius: 5, borderWidth: 1}}>
                    <Text style={[styles.progressBar, {width: this.state.EnsoleillementBar.toString() + '%'}]} ></Text>
                </View>
                <Text style={{borderWidth: 1, borderRadius: 15, padding: 15, color: '#9ACD32', marginTop: 50}}>
                    Examinez d'abord votre terrain pour voir les plantes qui vous sont suggerées
                </Text>
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