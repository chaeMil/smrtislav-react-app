'user strict'
import React,{Component} from 'react';
import {Platform, View, Image, Text, TextView, ListView, TouchableOpacity} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground';
import Constants from '../strings/Constants';
import Colors from '../styles/Colors';
import strings from '../strings/Locale';
import Icon from 'react-native-vector-icons/Ionicons'

class BaseScreen extends Component {

    _goBack() {
        this.props.navigator.pop();
    }

}

module.exports = BaseScreen;