import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableOpacityBase,
    Platform, // Para plataformas
} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text>POMODORO</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: Constants.statusBarHeight,
        // flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
