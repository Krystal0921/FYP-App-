import React, { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { TouchableOpacity, SafeAreaView, StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView, Button } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { NAVIGATION_USER } from '../../const/navigations';
import { ImagePickerIOS } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const ScreenEmployerSignUp = ({ navigation }) => {
  const [checked, setChecked] = useState('first');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setcompanyName] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [photoUri, setPhotoUri] = useState(null);


  const handleImageSelection = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image selection');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setPhotoUri(response.uri);
      }
    });
  };


  <BouncyCheckbox onPress={(isChecked: boolean) => {}} />

  const handleSignUp = () => {
    const data = {
      uName: userName,
      password,
      eName: name,
      eEmail: email,
      cName : companyName,
      cContact: contact,
      cAddress :address,
      cNumber: number,
      cPhoto: photoUri
    };

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please re-enter your password correctly.");
      return; 
    }

  fetch('http://44.221.91.193:3000/EmployerRegister', {
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
    <ScrollView contentContainerStyle={styles.EmploymentSignUpScrollView}>
      <SafeAreaView style={styles.EmploymentSignUpBackgound}>
        <Text style={styles.EmploymentSignUpTitle}>Sign Language Learning</Text>
        <Text style={styles.EmploymentSignUpCreateText}>Employer Account Create</Text>
        <TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Username"
  value={userName}
  onChangeText={setUserName}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Enter your password"
  value={password}
  onChangeText={setPassword}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Re-enter to confirm password"
  value={confirmPassword}
  onChangeText={setConfirmPassword}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Name"
  value={name}
  onChangeText={setName}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Email"
  value={email}
  onChangeText={setEmail}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Company Name"
  value={companyName}
  onChangeText={setcompanyName}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Company Contact"
  value={contact}
  onChangeText={setContact}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Company Address"
  value={address}
  onChangeText={setAddress}
/>
<TextInput
  style={styles.EmploymentSignUpInputText}
  placeholder="Company Register Number"
  value={number}
  onChangeText={setNumber}
/>
        {/* <TextInput style={styles.EmploymentSignUpInputText} placeholder="Username" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Enter your password" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Re-enter to confirm password" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Name" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Email" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Name" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Contact" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Address" />
        <TextInput style={styles.EmploymentSignUpInputText} placeholder="Company Register Number" /> */}
        <Text style={styles.EmploymentSignUpUploadImagesText} >Please upload your company logo:</Text>
        <TouchableOpacity
          style={styles.EmploymentSignUpButton}
          onPress={handleImageSelection}
        >
          <Text style={styles.EmploymentSignUpButtonText}>Upload Images</Text>
        </TouchableOpacity>
        <BouncyCheckbox
          size={25}
          fillColor="black"
          unfillColor="#FFFFFF"
          text="Please tick to agree Terms and condition"
          iconStyle={{ borderColor: "red" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {}}
        />
        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
          <TouchableOpacity style={styles.EmploymentSignUpButton}onPress={handleSignUp}>
          {photoUri && <Image source={{ uri: photoUri }} style={{ width: 200, height: 200 }} />}
            <Text style={styles.EmploymentSignUpButtonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  EmploymentSignUpUploadImagesText: {
    paddingTop: 5,
    paddingBottom: 5
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
    alignItems: 'center'
  },
  EmploymentSignUpButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'

  },
  EmploymentSignUpScrollView: {
    flexGrow: 1
  },
  EmploymentSignUpBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  EmploymentSignUpTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  EmploymentSignUpCreateText: {
    paddingTop: 10,
    fontSize: 18
  },
  EmploymentSignUpText: {
    paddingRight: 230,
    fontSize: 13,
    paddingTop: 10
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
    paddingTop: 10
  }
});

export default ScreenEmployerSignUp;
