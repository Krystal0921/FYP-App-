import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import ImagePicker, { launchImageLibrary } from 'react-native-image-picker';

const ScreenCreateForum = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const openImagePicker = () => {

  };

  return (
    <SafeAreaView style={styles.CreateForumBackgound}>
      <View style={styles.CreateForumView}>
        <TextInput
          style={styles.CreateForumInputText}
          placeholder="Post Title"
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.CreateForumView}>
        <TouchableOpacity style={styles.CreateForumButton} onPress={openImagePicker}>
          <Text style={styles.CreateForumButtonText}>Post Image (Option)</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          multiline
          numberOfLines={6}
          style={styles.CreateForumDetailsInputText}
          placeholder="Post Details"
          onChangeText={(text) => setDetails(text)}
        />
      </View>
      <Text />
      <View style={styles.CreateForumView}>
        <TouchableOpacity style={styles.CreateForumButton}>
          <Text style={styles.CreateForumButtonText}>Create</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CreateForumTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  CreateForumInputText: {
    backgroundColor: '#F5F5F7',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    width: 300,
    marginVertical: 3,
    marginBottom: 10
  },
  CreateForumView: {
    flex: 1
  },
  CreateForumDetailsView: {
    flex: 1
  },
  CreateForumButton: {
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  CreateForumButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  CreateForumDetailsInputText: {
    backgroundColor: '#F5F5F7',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    height: 200,
    width: 300,
    marginVertical: 3,
    textAlignVertical: 'top'
  },
  CreateForumBackgound: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingBottom: 50,
    paddingTop: 50
  }
});

export default ScreenCreateForum;
