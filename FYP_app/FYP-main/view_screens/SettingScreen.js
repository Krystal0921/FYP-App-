import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Alert,} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const SettingScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.SettingBackgound}>
                <Text style={styles.SettingTitle}>Setting</Text>
                <View style={styles.Setting}>
                    <Text style={styles.SettingText}>Backgound Music</Text>
                    <Switch/>
                </View>
                <View style={styles.Setting}>
                    <Text style={styles.SettingText}>Dark Mode</Text>
                    <Switch/>
                </View>
                <View style={styles.Setting}>
                <TouchableOpacity style={styles.LoginButton}>
                    <Text style={styles.LoginButtonText}>Logout</Text>
                </TouchableOpacity></View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    LoginButton: {
        paddingTop: 10,
        paddingBottom: 10,
        borderRadius: 5,
        fontSize: 16,
        width: 300,
        backgroundColor: '#264858',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: "center",
    },
    LoginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    SettingBackgound: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    SettingTitle: {
        fontSize: 25, 
        fontWeight: 'bold',
    },
    SettingText: {
        flex: 0.7,
        justifyContent: "space-around",
    },
    Setting: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: "row",
        alignItems: "center",
    },
}); 

export default SettingScreen;