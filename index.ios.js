/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';

export default class SmrtislavApp extends Component {
    render() {
        return (
            <AppNavigator
                app={this}
                initialRoute={{ident: "HomeScreen"}} />
        );
    }
}

AppRegistry.registerComponent('smrtislav', () => SmrtislavApp);
