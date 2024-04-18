import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM } from '../../const/navigations';
import { useAuth } from '../../components/AuthProvider';

const ScreenPost = ({ route, navigation }) => {
  const { mId, postId, title, image, content } = route.params;
  const { user } = useAuth();
  const [userId] = useState('');
  const [post, setPost] = useState([]);

  const imageMapping = {
    'default-profile-picture.jpg': require('../../assets/default-profile-picture.jpg')
  };

  const getImageSource = (imageFilename) => imageMapping[imageFilename];

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const fetchPostData = async () => {
          // alert(postId);
          const data = {
            postId
          };
          const response = await fetch(
            'http://44.221.91.193:3000/PostComment',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }
          );
          const responseData = await response.json();
          if (responseData.success) {
            setPost(responseData.data);
          } else {
            alert(responseData.msg || 'Failed to fetch post data');
          }
        };
        await Promise.all([fetchPostData()]);
      } catch (error) {
        alert('Post Error');
      }
    };
    fetchPostData();
  }, [postId, title, image, content]);

  const forumlist = ({ item }) => {
    const formattedTime = new Date(item.createAt).toLocaleString();
    return (
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={getImageSource(item.mPhoto)}
        />
        <View>
          <Text style={styles.ForumCommentText}>{item.mName}</Text>
          <Text style={styles.ForumCommentParagraph}>{item.commentContent}</Text>
          <Text style={styles.ForumCommentTime}>{formattedTime}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.ForumBackgound}>
      <ScrollView contentContainerStyle={styles.ForumScrollView}>
        <Text style={styles.ForumTitle}>{title}</Text>
        { user.userId === mId ? (
          <TouchableOpacity
            style={styles.SignUpTypeButton}
            onPress={() => navigation.navigate(NAVIGATION_FORUM.editForum, {
              screen: NAVIGATION_FORUM.post,
              title,
              content
            })}
          >
            <Text style={styles.SignUpTypeButtonText}>Edit</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity />
        )}
        <View style={styles.ForumTitleImageView}>
          <Image
            style={styles.ForumTitleImage}
            source={{ uri: `data:image/jpeg;base64,${image}` }}
          />
        </View>
        <Text style={styles.ForumDesciptionText}>{content}</Text>
        <FlatList
          data={post}
          renderItem={forumlist}
        />
      </ScrollView>
      { user ? (
        <View style={styles.MainSearchView}>
          <TextInput
            style={styles.MainSearchText}
            placeholder="Type Some Comment"
            placeholderTextColor="#888"
          />
          <TouchableOpacity>
            <MaterialIcons style={{ marginLeft: 100 }} size={50} name="arrow-right" />
          </TouchableOpacity>
        </View>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SignUpTypeButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignSelf: 'center'
  },
  SignUpTypeButtonText: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ForumCommentTime: {
    color: '#8F95B2',
    fontWeight: '600',
    paddingLeft: 90
  },
  MainSearchText: {
    flex: 1,
    height: '100%',
    color: '#333',
    fontSize: 16,
    marginLeft: 8
  },
  MainSearchView: {
    backgroundColor: '#f1f3f4',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  ForumCommentParagraph: {
    marginLeft: 10
  },
  ForumCommentText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  },
  ForumCommentImage: {
    height: 50,
    width: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 25
  },
  ForumCommentView: {
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 330,
    alignSelf: 'center',
    backgroundColor: '#D8BFD8',
    flexDirection: 'row'
  },
  ForumDesciptionText: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 15,
    fontWeight: 'bold'
  },
  ForumScrollView: {
    flexGrow: 1,
    paddingBottom: 10
  },
  ForumTitleImage: {
    padding: 10,
    height: 150,
    width: 300,
    resizeMode: 'contain'
  },
  ForumTitleImageView: {
    paddingTop: 20,
    ustifyContent: 'center',
    alignItems: 'center'
  },
  ForumBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  ForumTitle: {
    padding: 10,
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default ScreenPost;
