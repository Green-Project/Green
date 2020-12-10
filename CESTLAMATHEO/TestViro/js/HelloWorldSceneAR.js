'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
    ViroMaterials,
    ViroBox,
    Viro3DObject,
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroNode,
    ViroAmbientLight,
    ViroSpotLight,
    ViroARPlaneSelector,
    ViroAnimations
} from 'react-viro';

export default class HelloWorldSceneAR extends Component {

  constructor() {
    super();

    // Set initial state here
    this.state = {
      text : "Initializing AR..."
    };

    // bind 'this' to functions
    this._onInitialized = this._onInitialized.bind(this);
    this._onLoadStart = this._onLoadStart(this);
    this._onError = this._onError(this);
    this._onLoadEnd = this._onLoadEnd(this);
  }

  render() {
    return (
      <ViroARScene onTrackingUpdated={this._onInitialized}>
        <ViroText text={this.state.text}
                  scale={[.1, .1, .1]}
                  height={1}
                  width={5}
                  position={[0, .5, -1]}
                  style={styles.helloWorldTextStyle} />
        <ViroAmbientLight color="#aaaaaa" />
        <ViroSpotLight innerAngle={5}
                       outerAngle={90}
                       direction={[0,-1, -.2]}
                       position={[0, 3,1]}
                       color={"#ffffff"}
                       castsShadow={true}
        />
        <ViroARPlaneSelector>
          <ViroNode position={[0,0,1]} dragType={"FixedToWorld"} onDrag={()=>{}}>
          <Viro3DObject
                      source={require('./res/tree2.vrx')}
                      key={"model"}
                      scale={[0.1, 0.1, 0.1]}
                      position={[0, 0, -1]}
                      type={"VRX"}
                      dragType={"FixedDistance"}
                      onDrag={()=>{}}
                      onLoadStart={this._onLoadStart}
                      onLoadEnd={this._onLoadEnd}
                      onError={this._onError}
        />
          </ViroNode>
        </ViroARPlaneSelector>
      </ViroARScene>
    );
  }

  _onLoadEnd() {
     console.log('loadend')
  }

  _onError(event) {
    console.log('HAAAAAAAAAAAAAAAA')
    console.log(event)
  }

  _onLoadStart() {
    console.log('loadstart')
  }

  _onInitialized(state, reason) {
    if (state == ViroConstants.TRACKING_NORMAL) {
      this.setState({
        text : "Hello Green!"
      });
    } else if (state == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

module.exports = HelloWorldSceneAR;
