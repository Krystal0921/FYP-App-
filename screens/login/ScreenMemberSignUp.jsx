import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
// import { CheckBox } from '@rneui/themed';
import { NAVIGATION_USER } from '../../const/navigations';

const ScreenMemberSignUp = ({ navigation }) => {
  const [checked, setChecked] = useState('first');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [mType, setMType] = useState(null);

  const handleRadioPress = (value) => {
    setChecked(value);
    let updatedMType = null;
    if (value == 'Deaf or hardly of hearing') {
      updatedMType = "1";
    } else if (value == 'Mute or hardly of speaking') {
      updatedMType = "2";
    } else if (value == 'None of the above') {
      updatedMType = "3";
    }
    setMType(updatedMType);
  };


  const handleCheckBoxToggle = () => {
    setChecked(!checked);
  };

  const handleSignUp = () => {
    // Prepare the data object to send in the API request
    const data = {
      uName: userName,
      password,
      mName: name,
      mContact: contact,
      mEmail: email,
      mType: mType,
      mPhoto: 'user-icon.png',
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password correctly.");
      return; 
    }

    fetch('http://44.221.91.193:3000/MemberRegister', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          alert('Welcome aboard! You have successfully signed up. Start exploring our platform now!.');
          navigation.navigate(NAVIGATION_USER.login);
        } else {
          alert(responseData.msg)
          alert('Signup unsuccessful. Please try again later.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };


  return (
    <ScrollView contentContainerStyle={styles.MemberSignUpScrollView}>
      <SafeAreaView style={styles.MemberSignUpBackgound}>
        <Text style={styles.MemberSignUpTitle}>Sign Language Learning</Text>
        <Text style={styles.MemberSignUpCreateText}>Member Account Create</Text>
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Enter your user name"
          value={userName}
          onChangeText={setUserName}
        />
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Re-enter to confirm password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Contact"
          value={contact}
          onChangeText={setContact}
        />
        <TextInput
          style={styles.MemberSignUpInputText}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        {/* <TextInput style={styles.MemberSignUpInputText} placeholder="Enter your user name" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Enter your password" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Re-enter to confirm password" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Name" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Contact" />
        <TextInput style={styles.MemberSignUpInputText} placeholder="Email" /> */}
        <Text style={{ paddingTop: 10 }}>(Optional) Please select the option that best </Text>
        <Text>decribes your hearing and speech abilities:</Text>
        <View style={styles.MemberSignaUpRadioButtonView}>
          <RadioButton.Item
            label="Deaf or hardly of hearing"
            value="1"
            status={checked === 'Deaf or hardly of hearing' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('Deaf or hardly of hearing')}
          />
          <RadioButton.Item
            label="Mute or hardly of speaking"
            value="2"
            status={checked === 'Mute or hardly of speaking' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('Mute or hardly of speaking')}
          />
          <RadioButton.Item
            label="None of the above"
            value="3"
            status={checked === 'None of the above' ? 'checked' : 'unchecked'}
            onPress={() => handleRadioPress('None of the above')}
          />
        </View>
        {/* <CheckBox
          title="Please tick to agree Terms and Conditions"
          checked
          onPress={handleCheckBoxToggle}
        /> */}
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
       <TouchableOpacity style={styles.MemberSignUpButton} onPress={handleSignUp}>
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
    alignItems: 'center',
    paddingTop: 50
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
