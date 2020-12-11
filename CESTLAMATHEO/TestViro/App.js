import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';
import Login from './component/Login'
import Home from './component/Home'
import Selection from './component/Selection'
import Details from './component/Details'
import ViroSample from './ViroSample'


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{headerShown: false}} name="Selection" component={Selection} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
        <Stack.Screen options={{headerShown: false}} name="ARView" component={ViroSample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


/**
 * Copyright (c) 2017-present, Viro, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
