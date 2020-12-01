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
            <View style={{padding: 15}}>
                <Button
                    title="Examiner le terrain"
                    onPress={this._evaluate}
                />
                <Text>Air</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey'}}>
                    <Text style={[styles.progressBar, {width: this.state.airBar.toString() + '%'}]} ></Text>
                </View>
                <Text>Terre</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey'}}>
                    <Text style={[styles.progressBar, {width: this.state.TerreBar.toString() + '%'}]} ></Text>
                </View>
                <Text>Ensoleillement</Text>
                <View style={styles.progressBar} style={{width: '100%', backgroundColor: 'grey'}}>
                    <Text style={[styles.progressBar, {width: this.state.EnsoleillementBar.toString() + '%'}]} ></Text>
                </View>
            </View>
        )
    }
    

}

const styles = StyleSheet.create({
        progressBar: {
        height: 20,
        backgroundColor: 'mediumspringgreen',
        borderColor: '#000',
        borderWidth: 2,
        borderRadius: 5
    }
});

export default Home