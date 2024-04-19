import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import { NAVIGATION_TAB } from '../../const/navigations';
import { useAuth } from '../../components/AuthProvider';

const ScreenEditForum = ({ route, navigation }) => {
  const { title, content, createAt, postId } = route.params;
  const { user } = useAuth();
  const [contents, setContents] = useState(content);
  const [userId] = useState('');
  // alert(user.userId);
  // alert(postId);
  // alert(content);
  // alert(createAt);

  const Edit = async () => {
    try {
      const data = {
        postId,
        mId: user.userId,
        content: contents,
        createAt
      };
      fetch('http://44.221.91.193:3000/EditPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then(async (responseData) => {
          if (responseData.success) {
            navigation.navigate(NAVIGATION_TAB.course);
            navigation.navigate(NAVIGATION_TAB.forum);
          } else if (responseData.code === 1) {
            alert(responseData.msg);
          } else {
            alert('Wrong username or password');
          }
        });
    } catch (e) {
      switch (e.response.status) {
        case 401:
          alert('Wrong username or password');
          break;
        default:
          alert('Login failed');
      }
    }
  };

  return (
    <SafeAreaView style={styles.EditForumBackgound}>
      <View style={styles.EditForumView}>
        <Text style={styles.EditForumInputText}>{title}</Text>
      </View>
      <View style={styles.EditForumView}>
        <TouchableOpacity style={styles.EditForumButton}>
          <Text style={styles.EditForumButtonText}>Post Image (Option)</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          multiline
          numberOfLines={10}
          style={styles.EditForumDetailsInputText}
          placeholder="Post Details"
          value={contents}
          onChangeText={setContents}
        />
      </View>
      <View style={styles.EditForumView}>
        <TouchableOpacity style={styles.EditForumButton} onPress={Edit}>
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
