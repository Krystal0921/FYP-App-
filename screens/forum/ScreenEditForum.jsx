import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';

const ScreenEditForum = ({ route, navigation }) => {
  const { postId } = route.params;
  alert(postId);

  useEffect(() => {
    const fetchPostData = async () => {

    };
    fetchPostData();
  }, [postId]);

  return (
    <SafeAreaView style={styles.EditForumBackgound}>
      <View style={styles.EditForumView}>
        <Text style={styles.EditForumInputText}>{postId}</Text>
      </View>
      <View style={styles.EditForumView}>
        <TouchableOpacity style={styles.EditForumButton}>
          <Text style={styles.EditForumButtonText}>Post Image (Option)</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput multiline numberOfLines={10} style={styles.EditForumDetailsInputText} placeholder="Post Details" />
      </View>
      <View style={styles.EditForumView}>
        <TouchableOpacity style={styles.EditForumButton}>
          <Text style={styles.EditForumButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  EditForumTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  EditForumInputText: {
    backgroundColor: '#F5F5F7',
    padding: 15,
    borderRadius: 5,
    fontSize: 20,
    height: 50,
    width: 300,
    marginVertical: 3,
    marginBottom: 10,
    paddingBottom: 10,
    paddingTop: 10
  },
  EditForumView: {
    paddingTop: 20,
    paddingBottom: 20,
    flex: 1
  },
  EditForumDetailsView: {
    flex: 1
  },
  EditForumButton: {
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  EditForumButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  EditForumDetailsInputText: {
    backgroundColor: '#F5F5F7',
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    height: 300,
    width: 300,
    marginVertical: 3,
    textAlignVertical: 'top'
  },
  EditForumBackgound: {
    justifyContent: 'center',
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  }
});

export default ScreenEditForum;
