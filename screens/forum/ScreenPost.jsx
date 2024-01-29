import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM } from '../../const/navigations';

const ScreenPost = ({ navigation }) => (
  <SafeAreaView style={styles.ForumBackgound}>
    <ScrollView contentContainerStyle={styles.ForumScrollView}>
      <Text style={styles.ForumTitle}>How accurate for battery level is myPhonak app?</Text>
      <TouchableOpacity
        style={styles.SignUpTypeButton}
        onPress={() => navigation.navigate(NAVIGATION_FORUM.editForum, {
          screen: NAVIGATION_FORUM.post
        })}
      >
        <Text style={styles.SignUpTypeButtonText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.ForumTitleImageView}>
        <Image
          style={styles.ForumTitleImage}
          source={require('../../assets/myPhonak_app.png')}
        />
      </View>
      <Text style={styles.ForumDesciptionText}>Lately I have been leaving my KS9s turned on and in my ears all night streaming nature sounds and music in order to block out the neighborhood "disk jockey" who was keeping me up all night. (I tried every type and strength of earplugs first and none were )</Text>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/Cherrie.jpeg')}
        />
        <View>
          <Text style={styles.ForumCommentText}>cherrie0912</Text>
          <Text style={styles.ForumCommentParagraph}>Good sharing.</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/default-profile-picture.jpg')}
        />
        <View>
          <Text style={styles.ForumCommentText}>kris0111</Text>
          <Text style={styles.ForumCommentParagraph}>Excellent!</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/default-profile-picture.jpg')}
        />
        <View>
          <Text style={styles.ForumCommentText}>jackyIsZero001</Text>
          <Text style={styles.ForumCommentParagraph}>Wow</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/default-profile-picture.jpg')}
        />
        <View>
          <Text style={styles.ForumCommentText}>ivy023yyy</Text>
          <Text style={styles.ForumCommentParagraph}>Looks great!</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/default-profile-picture.jpg')}
        />
        <View>
          <Text style={styles.ForumCommentText}>wandy090</Text>
          <Text style={styles.ForumCommentParagraph}>Oops</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
    </ScrollView>
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
  </SafeAreaView>
);

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
    paddingLeft: 120
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
    marginBottom: 10
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
