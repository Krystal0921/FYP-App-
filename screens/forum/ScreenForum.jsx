import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM, NAVIGATION_MAIN } from '../../const/navigations';

const ScreenForum = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.AllForumScrollView}>
    <SafeAreaView style={styles.AllForumBackgound}>

      <View style={styles.AllForumSearch}>
        <View style={styles.AllForumScreenView}>
          <TouchableOpacity>
            <MaterialIcons size={30} name="search" />
          </TouchableOpacity>
          <TextInput
            style={styles.AllForumSearchInput}
            placeholder="Search The Post"
            placeholderTextColor="#888"
          />
        </View>
        <Text>   </Text>
        <View style={styles.AllForumButtonCircle}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
              screen: NAVIGATION_FORUM.createforum
            })}
          >
            <MaterialIcons size={30} name="add" color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.AllForum}
        onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
          screen: NAVIGATION_FORUM.post
        })}
      >
        <Image
          style={styles.AllForumImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.AllForumText}>First Post</Text>
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.AllForum}
        onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
          screen: NAVIGATION_FORUM.post
        })}
      >
        <Image
          style={styles.AllForumImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.AllForumText}>Second Post</Text>
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.AllForum}
        onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
          screen: NAVIGATION_FORUM.post
        })}
      >
        <Image
          style={styles.AllForumImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.AllForumText}>Third Post</Text>
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  AllForumSearchInput: {
    color: '#333',
    fontSize: 16,
    marginLeft: 8,
    width: 200
  },
  AllForumButtonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#55098B',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AllForumScrollView: {
    flexGrow: 1
  },
  AllForumSearchText: {
    fontSize: 18,
    marginLeft: 5,
    flex: 1,
    paddingHorizontal: 20
  },
  AllForumBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center'
  },
  AllForumSearch: {
    marginTop: 50,
    paddingVertical: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  AllForumScreenView: {
    backgroundColor: '#f1f3f4',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  AllForumTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  AllForum: {
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 330,
    backgroundColor: '#D8BFD8',
    flexDirection: 'row'
  },
  AllForumImage: {
    height: 50,
    width: 50,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10
  },
  AllForumText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5
  },
  AllForumParagraph: {
    marginLeft: 10
  },
  AllForumTime: {
    fontWeight: '600',
    paddingTop: 100,
    paddingLeft: 120
  }
});

export default ScreenForum;
