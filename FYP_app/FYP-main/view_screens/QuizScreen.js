import React, { useState } from 'react';
import { StyleSheet, Alert, View, Text, ImageBackground, FlatList, SafeAreaView, Image, Button, TouchableOpacity} from "react-native";
import { RadioButton } from 'react-native-paper';
import Icon from "react-native-vector-icons/MaterialIcons";

const QuizScreen = ({navigation}) => {
    const [checked, setChecked] = useState('first');

    const handleRadioPress = (value) => {
        setChecked(value);
    };

    return (
        <>
            <SafeAreaView style={styles.SectionBackgound}>
                <Text style={styles.SectionTitle}>Animal</Text>
                <View>  
                    <View style={styles.Section}>

                    </View>
                </View> 
                <Text style={styles.SectionQuestionTitle}>Question</Text>
                <Text>1. What is this?</Text>
                <View style={styles.SectionRadioButtonView}>
                <View style={styles.SectionRadioButtonRow}>
                    <RadioButton.Item
                        label="A. Hamster"
                        value="A"
                        status={checked === 'A' ? 'checked' : 'unchecked'}
                        onPress={() => handleRadioPress('A')}
                    />
                    <RadioButton.Item
                        label="B. Hamster"
                        value="B"
                        status={checked === 'B' ? 'checked' : 'unchecked'}
                        onPress={() => handleRadioPress('B')}
                    />
                </View>                    
                <View style={styles.SectionRadioButtonRow}>
                    <RadioButton.Item
                        label="C. Hamster"
                        value="C"
                        status={checked === 'C' ? 'checked' : 'unchecked'}
                        onPress={() => handleRadioPress('C')}
                    />
                    <RadioButton.Item
                        label="D. Hamster"
                        value="D"
                        status={checked === 'D' ? 'checked' : 'unchecked'}
                        onPress={() => handleRadioPress('D')}
                    />
                </View>
                </View>
                <TouchableOpacity style={styles.SectionButton}>
                    <Text style={styles.SectionButtonText}>Next Question</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    SectionButton: {
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
    SectionButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    SectionRadioButtonView: {
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10,
    },
    SectionRadioButtonRow: {
        marginRight: 10,
        marginLeft: 10,
    },
    SectionBackgound: {
        backgroundColor: '#fff',
        flex: 1,
        alignItems: "center",
        paddingTop: 50,
    },
    SectionTitle: {
        fontSize: 25, 
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },
    Section: {
        marginTop: 10,
        paddingBottom: 10,
        borderRadius: 10,
        width:330,
        height:300,
        backgroundColor: "#D0B3A0",
        flexDirection: "row",
    },
    SectionQuestionTitle: {
        fontSize: 25, 
        fontWeight: 'bold',
        marginTop: 5,
    },
}); 

export default QuizScreen;