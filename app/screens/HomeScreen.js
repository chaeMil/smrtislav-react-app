'user strict'
import React,{Component} from 'react';
import {View, Image, Text, ListView, TouchableOpacity, ActivityIndicator} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground';
import BaseScreen from '../screens/BaseScreen';
import strings from '../strings/Locale';
import Colors from '../styles/Colors';
import Constants from '../strings/Constants';
import {FontThemes} from '../styles/Styles';

let homeData = [];

class HomeScreen extends BaseScreen {
    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            homeDataSource: ds.cloneWithRows(homeData)
        }
    }

    render() {

        return (
            <ViewContainer style={{flexDirection: 'column'}}>
                <StatusBarBackground/>
                <Image style={{flex: 1, aspectRatio: 1, resizeMode: 'contain'}}
                       source={require('../../assets/images/samotar.jpg')} />
                <Text style={FontThemes.h1}>Smrtislav</Text>
            </ViewContainer>
        )
    }
}

module.exports = HomeScreen;