import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { CheckBox } from '@rneui/themed';

const ScreenMemberSignUp = ({ navigation }) => {
  const [checked, setChecked] = useState('first');

  const handleRadioPress = (value) => {
    setChecked(value);
  };

  const handleCheckBoxToggle = () => {
    setChecked(!checked);
  };

  return (
    <ScrollView contentContainerStyle={styles.MemberSignUpScrollView}>
      <SafeAreaView style={styles.MemberSignUpBackgound}>
        <Text style={styles.MemberSignUpTitle}>Sign Language Learning</Text>
        <Text style={styles.MemberSignUpCreateText}>Member Account Create</Text>
        <TextInput style={styles.MemberSignUpInputText} placeholder="Enter your user name" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Enter your password" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Re-enter to confirm password" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Name" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Contact" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Email" />
        <Text style={{ paddingTop: 10 }}>(Optional) Please select the option that best </Text>
        <Text>decribes your hearing and speech abilities:</Text>
        <View style={styles.MemberSignaUpRadioButtonView}>
          <RadioButton.Item
            label="Deaf or hardly of hearing"
            value="Deaf or hardly of hearing"
            status={checked === 'Deaf or hardly of hearing' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('Deaf or hardly of hearing')}
          />
          <RadioButton.Item
            label="Mute or hardly of speaking"
            value="Mute or hardly of speaking"
            status={checked === 'Mute or hardly of speaking' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('Mute or hardly of speaking')}
          />
          <RadioButton.Item
            label="None of the above"
            value="None of the above"
            status={checked === 'None of the above' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('None of the above')}
          />
        </View>
        <CheckBox
          title="Please tick to agree Terms and Conditions"
          checked
          onPress={handleCheckBoxToggle}
        />
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <TouchableOpacity style={styles.MemberSignUpButton}>
            <Text style={styles.MemberSignUpButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  MemberSignUpButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  MemberSignUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  MemberSignUpScrollView: {
    flexGrow: 1
  },
  MemberSignaUpCheckBoxView: {
    flexDirection: 'row'
  },
  MemberSignaUpRadioButtonView: {
    flexDirection: 'column'
  },
  MemberSignUpBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  MemberSignUpTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  MemberSignUpCreateText: {
    paddingTop: 10,
    fontSize: 18
  },
  MemberSignUpText: {
    paddingRight: 230,
    fontSize: 13,
    paddingTop: 10
  },
  MemberSignUpInputText: {
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
  }
});

export default ScreenMemberSignUp;
