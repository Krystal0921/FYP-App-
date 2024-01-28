import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM } from '../../const/navigations';

const ScreenPost = ({ navigation }) => (
  <SafeAreaView style={styles.ForumBackgound}>
    <ScrollView contentContainerStyle={styles.ForumScrollView}>
      <Text style={styles.ForumTitle}>Title Name</Text>
      <TouchableOpacity
        style={styles.SignUpTypeButton}
        onPress={() => navigation.navigate(NAVIGATION_FORUM.editforum, {
          screen: NAVIGATION_FORUM.forum
        })}
      >
        <Text style={styles.SignUpTypeButtonText}>Edit</Text>
      </TouchableOpacity>
      <View style={styles.ForumTitleImageView}>
        <Image
          style={styles.ForumTitleImage}
          source={require('../../assets/backgroundd.png')}
        />
      </View>
      <Text style={styles.ForumDesciptionText}>This is a Desciption.This is a Desciption.This is a Desciption.This is a Desciption.This is a Desciption.</Text>

      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.ForumCommentText}>First Comment</Text>
          <Text style={styles.ForumCommentParagraph}>Comment Details</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.ForumCommentText}>Second Comment</Text>
          <Text style={styles.ForumCommentParagraph}>Comment Details</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.ForumCommentText}>Third Comment</Text>
          <Text style={styles.ForumCommentParagraph}>Comment Details</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.ForumCommentText}>Forth Comment</Text>
          <Text style={styles.ForumCommentParagraph}>Comment Details</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.ForumCommentView}>
        <Image
          style={styles.ForumCommentImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.ForumCommentText}>Fifth Comment</Text>
          <Text style={styles.ForumCommentParagraph}>Comment Details</Text>
          <Text style={styles.ForumCommentTime}>21:01:2024 19:57</Text>
        </View>
      </View>
    </ScrollView>
    <View style={styles.MainSearchView}>
      <TextInput
        style={styles.MainSearchText}
        placeholder="Type Some Comment"
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
    fontSize: 18,
    marginLeft: 5
  },
  MainSearchView: {
    height: 60,
    width: 350,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: '#F5F5F7',
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row'
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
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});

export default ScreenPost;
