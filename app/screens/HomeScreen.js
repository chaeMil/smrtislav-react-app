'user strict'
import React,{Component} from 'react';
import {View, Image, Text, ListView, TouchableOpacity, ActivityIndicator} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground';
import BaseScreen from '../screens/BaseScreen';
import strings from '../strings/Locale';
import Colors from '../styles/Colors';
import Constants from '../strings/Constants';

let homeData = [];

class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            isLoading: true,
            homeDataSource: ds.cloneWithRows(homeData)
        }
    }

    render() {

        let activityIndicator = null;
        if (this.state.isLoading) {
            activityIndicator = (
                <ActivityIndicator
                    refs="indicator"
                    style={{position: 'absolute', left: 0, right: 0, top: 0, bottom: 0}}/>
            );
        }

        return (
            <ViewContainer>
                <StatusBarBackground/>
                {activityIndicator}

            </ViewContainer>
        )
    }
}

module.exports = HomeScreen;