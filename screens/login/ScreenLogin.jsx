import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { NAVIGATION_USER } from '../../const/navigations';

const ScreenLogin = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const Login = () => {
        const data = {
            username,
            password
        };

        fetch('http://44.221.91.193:3000/login/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(responseData => {
            if (responseData.success) {
                alert('Welcome.');
                navigation.navigate(NAVIGATION_USER.user);
            } else {
                alert('Login failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    };

    return (
        <SafeAreaView style={styles.LoginBackgound}>
            <Image style={styles.LoginImage} source={require('../../assets/backgroundd.png')}/>
            <View className="flex items-center"><Text style={styles.LoginTitle}>Login</Text></View>
            <Text style={styles.LoginText}>Username</Text>
            <TextInput
                style={styles.LoginInputText}
                placeholder="Username"
                value={username}
                onChangeText={text => setUsername(text)}
            />
            <Text style={styles.LoginText}>Password</Text>
            <TextInput
                style={styles.LoginInputText}
                placeholder="****"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity style={styles.LoginButton} onPress={Login}>
                <Text style={styles.LoginButtonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate(NAVIGATION_USER.signup, { screen: NAVIGATION_USER.signup})}
            >
                <View style={styles.LoginSignUpView}>
                    <Text>Don't have an account? </Text>
                    <Text style={styles.LoginSignUpText}>Sign Up</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    LoginButton: {
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
    LoginButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    LoginBackgound: {
        backgroundColor: '#fff',
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
    },
    LoginTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        paddingBottom: 10
    },
    LoginImage: {
        height: 250,
        width: 250,
        resizeMode: 'contain'
    },
    LoginInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10
    },
    LoginText: {
        paddingRight: 230,
        fontSize: 13,
        textAlign: 'left'
    },
    LoginSignUpView: {
        paddingTop: 10,
        borderRadius: 5,
        fontSize: 16,
        justifyContent: 'center',
        width: 300,
        flexDirection: 'row'
    },
    LoginSignUpText: {
        color: 'blue',
        fontWeight: 'bold'
    }
});

export default ScreenLogin;