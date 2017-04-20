'user strict'
import React,{Component} from 'react';
import {Dimensions, View, ScrollView, Image, Text, ListView, TouchableOpacity, ActivityIndicator} from 'react-native'
import ViewContainer from '../components/ViewContainer'
import StatusBarBackground from '../components/StatusBarBackground';
import BaseScreen from '../screens/BaseScreen';
import strings from '../strings/Locale';
import Colors from '../styles/Colors';
import Constants from '../strings/Constants';
import {FontThemes} from '../styles/Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const fbIcon = (<Icon name="facebook-official" size={30} color={Colors.primaryColor} />);
const instagramIcon = (<Icon name="instagram" size={30} color={Colors.primaryColor} />);
const youtubeIcon = (<Icon name="youtube" size={30} color={Colors.primaryColor} />);

class HomeScreen extends BaseScreen {

    render() {

        let screenWidth = Dimensions.get('window').width;

        return (
            <ViewContainer>
                <StatusBarBackground/>
                <ScrollView>
                    <View>
                        <Image style={{width: screenWidth, height: screenWidth,
                                resizeMode: 'contain'}}
                              source={require('../../assets/images/samotar.jpg')} />
                        <Text style={[FontThemes.huge, {textAlign: 'center', height: 80,
                                marginTop: 30}]}>
                            SMRTISLAV
                        </Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={{padding: 12}}>
                            {fbIcon}
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 12}}>
                            {instagramIcon}
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 12}}>
                            {youtubeIcon}
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ViewContainer>
        )
    }
}

module.exports = HomeScreen;