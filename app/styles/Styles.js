import {StyleSheet} from 'react-native';
import Colors from './Colors';

let FontThemes = StyleSheet.create({
    huge: {
        fontFamily: 'Kozuka Gothic Pro',
        color: Colors.primaryColor,
        fontSize: 52,
    },
    h1: {
        fontFamily: 'Kozuka Gothic Pro',
        color: Colors.primaryColor,
        fontSize: 40
    },
    paragraph: {
        fontFamily: 'Kozuka Gothic Pro',
        color: Colors.primaryColor,
        fontSize: 16,
        lineHeight: 30
    }
});

module.exports = {FontThemes};