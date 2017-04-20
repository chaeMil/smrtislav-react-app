'use strict'
import React, {Component} from 'react';
import {Navigator, Text, StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';

class AppNavigator extends Component {

    _renderScene(route, navigator) {
        let globalNavigatorProps = { navigator };

        let ident = null;
        if (route.initialRoute != null) {
            ident = route.initialRoute.ident;
        } else {
            ident = route.ident;
        }

        switch(ident) {
            case "HomeScreen":
                return (
                    <HomeScreen
                        app={route.app}
                        {...globalNavigatorProps} />
                );
            default:
                return (
                    <Text style={{margin: 20}}>{`YO YOU MESSED SOMETHING UP ${route.ident}`}</Text>
                );
        }
    }

    render() {
        return (
            <Navigator
                initialRoute={{
                    initialRoute: this.props.initialRoute,
                    app: this.props.app
                }}
                gestures={null}
                ref="appNavigator"
                style={styles.navigatorStyles}
                renderScene={this._renderScene} />
        )
    }

}

const styles = StyleSheet.create({

    navigatorStyles: {

    }

});

module.exports = AppNavigator;