import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, Pressable, Image } from 'react-native';
import { NAVIGATION_USER } from '../../const/navigations';

const ScreenSignup = ({ navigation }) => (
    <SafeAreaView style={styles.SignUpTypeBackgound}>
        <Text style={styles.SignUpTypeTitle}>Choose Your Type</Text>
        <TouchableOpacity 
            style={styles.SignUpTypeButton}
            onPress={() => navigation.navigate(NAVIGATION_USER.membersignup, {
                screen: NAVIGATION_USER.signup
            })}
        >
            <Text style={styles.SignUpTypeButtonText}>Member</Text>
        </TouchableOpacity>
        <Text/>
        <TouchableOpacity 
            style={styles.SignUpTypeButton}
            onPress={() => navigation.navigate(NAVIGATION_USER.employersignup, {
                screen: NAVIGATION_USER.signup
            })}
        >
            <Text style={styles.SignUpTypeButtonText}>Employer</Text>
        </TouchableOpacity>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    MainFooter: {
        flexDirection: 'row',
        height: 40,
        paddingTop: 10,
        backgroundColor: '#55098b',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    MainIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 5
    },
    SignUpTypeBackgound: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50
    },
    SignUpTypeTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 20
    },
    SignUpTypeButton: {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 16,
        width: 300,
        backgroundColor: '#264858',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    SignUpTypeButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});

export default ScreenSignup;