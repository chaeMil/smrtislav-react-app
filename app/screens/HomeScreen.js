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
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'rn-viewpager';
import Icon from 'react-native-vector-icons/FontAwesome';

const fbIcon = (<Icon name="facebook-official" size={40} color={Colors.primaryColor} />);
const instagramIcon = (<Icon name="instagram" size={40} color={Colors.primaryColor} />);
const youtubeIcon = (<Icon name="youtube" size={40} color={Colors.primaryColor} />);

class HomeScreen extends BaseScreen {

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={4} />;
    }

    render() {

        let screenWidth = Dimensions.get('window').width;

        return (
            <ViewContainer>
                <StatusBarBackground/>
                <ScrollView>
                    <View>
                        <Image style={{width: screenWidth, height: screenWidth, resizeMode: 'contain'}}
                              source={require('../../assets/images/samotar.jpg')} />
                        <Text style={[FontThemes.huge, {textAlign: 'center', height: 80,
                                marginTop: 30}]}>
                            SMRTISLAV
                        </Text>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <TouchableOpacity style={{padding: 16}}>
                            {fbIcon}
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16}}>
                            {instagramIcon}
                        </TouchableOpacity>
                        <TouchableOpacity style={{padding: 16}}>
                            {youtubeIcon}
                        </TouchableOpacity>
                    </View>

                    <IndicatorViewPager
                        style={{marginTop: 20, marginBottom: 20,
                            height: screenWidth, backgroundColor: Colors.photosBg}}
                        indicator={this._renderDotIndicator()}>
                        <View key={1}>
                            <Image style={{width: screenWidth, height: screenWidth, resizeMode: 'contain'}}
                                   source={require('../../assets/images/photo1.jpg')} />
                        </View>
                        <View key={2}>
                            <Image style={{width: screenWidth, height: screenWidth, resizeMode: 'contain'}}
                                   source={require('../../assets/images/photo2.jpg')} />
                        </View>
                        <View key={3}>
                            <Image style={{width: screenWidth, height: screenWidth, resizeMode: 'contain'}}
                                   source={require('../../assets/images/photo3.jpg')} />
                        </View>
                        <View key={4}>
                            <Image style={{width: screenWidth, height: screenWidth, resizeMode: 'contain'}}
                                   source={require('../../assets/images/photo4.jpg')} />
                        </View>
                    </IndicatorViewPager>

                    <Text style={[FontThemes.paragraph, {padding: 24}]}>
                        “Sunshine, Vanessa. Milujete? Já jo! S dlouhohrajícím debutem Notorickej samotář (název ze života) totiž zkombinoval právě dvě své (ex)plnohodnotné kapely a z každé si vzal to nejlepší. V souvislosti se Smrtislavovou ranou tvorbou často padalo jedno jméno. Kodym. Ve spojitosti s plnohodnotnou deskou to už může říct jedině člověk bez fantazie. To, že Tuzex kňourá, jako by se právě probouzel se západem slunce v sametu s nedopitou láhví Vavřince, přece není to hlavní. Je to dark-popové, vamp-rockové, goth-dancové a roztomile pubertální. V kombinaci s pražským amfetaminovým frázováním ironických textů tak Smrtislav z šálku, který nějak původně nebyl úplně můj, udělal přesně mojí kávu. Černou. Jak jinak.“
                    </Text>
                </ScrollView>
            </ViewContainer>
        )
    }
}

module.exports = HomeScreen;