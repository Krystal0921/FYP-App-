import React, { useState } from 'react';
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView} from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Switch } from 'react-native-gesture-handler';

const EmploymentSignUpScreen = ({navigation}) => {
    const [checked, setChecked] = useState('first');

    const handleCheckBoxToggle = () => {
        setChecked(!checked);
    };

    return (
        <>
            <ScrollView contentContainerStyle={styles.EmploymentSignUpScrollView}>
                <SafeAreaView style={styles.EmploymentSignUpBackgound}>
                    <Text style={styles.EmploymentSignUpTitle}>Sign Language Learning</Text>
                    <Text style={styles.EmploymentSignUpCreateText}>Employer Account Create</Text>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Username"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Enter your password"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Re-enter to confirm password"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Name"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Email"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Name"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Contact"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Address"/>
                    <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Register Number"/>
                    <Text style={styles.EmploymentSignUpUploadImagesText}>Please upload your company logo:</Text>
                    <TouchableOpacity style={styles.EmploymentSignUpButton}>
                        <Text style={styles.EmploymentSignUpButtonText}>Upload Images</Text>
                    </TouchableOpacity>
                    <CheckBox
                        title="Please tick to agree Terms and Conditions"
                        checked={checked}
                        onPress={handleCheckBoxToggle}
                    />
                    <TouchableOpacity style={styles.EmploymentSignUpButton}>
                        <Text style={styles.EmploymentSignUpButtonText}>Register</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            </ScrollView>
            <View style={styles.MainFooter}>
            <Pressable style={({ pressed }) => { return { opacity: pressed ? 0.5 : 1 }; } }>
                <Image
                    onPress={() => navigation.navigate('SettingScreen', {})}
                    source={require("../assets/forum-icon.png")}
                    style={styles.MainIcon} 
                />
            </Pressable>
            <Pressable style={({ pressed }) => { return { opacity: pressed ? 0.5 : 1 }; } }>
                <Image
                    source={require("../assets/chat-icon.png")}
                    style={styles.MainIcon} 
                />
            </Pressable>
            <Pressable style={({ pressed }) => { return { opacity: pressed ? 0.5 : 1 }; } }>
                <Image
                    source={require("../assets/home-icon.png")}
                    style={styles.MainIcon} 
                />
            </Pressable>
            <Pressable style={({ pressed }) => { return { opacity: pressed ? 0.5 : 1 }; } }>
                <Image
                    source={require("../assets/employment-icon.png")}
                    style={styles.MainIcon} 
                />
            </Pressable>
            <Pressable style={({ pressed }) => { return { opacity: pressed ? 0.5 : 1 }; } }>
                <Image
                    source={require("../assets/user-icon.png")}
                    style={styles.MainIcon}
                />
            </Pressable>
        </View>
        </>
    );
};

const styles = StyleSheet.create({
    MainFooter: {
        flexDirection: "row",
        height: 40,
        paddingTop: 10,
        backgroundColor: "#55098b",
        justifyContent: "space-around",
        alignItems: "center",
    },
    MainIcon: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    EmploymentSignUpUploadImagesText: {
        paddingTop: 5,
        paddingBottom: 5,
    },
    EmploymentSignUpButton: {
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
    EmploymentSignUpButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        
    },
    EmploymentSignUpScrollView: {
        flexGrow: 1,
    },
    EmploymentSignUpBackgound: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    EmploymentSignUpTitle: {
        fontSize: 25, 
        fontWeight: 'bold',
    },
    EmploymentSignUpCreateText: {
        paddingTop: 10,
        fontSize: 18, 
    },
    EmploymentSignUpText: {
        paddingRight: 230,
        fontSize: 13,
        paddingTop: 10,
    },
    EmploymentSignUpInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
}); 

export default EmploymentSignUpScreen;