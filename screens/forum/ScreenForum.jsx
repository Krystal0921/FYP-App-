import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM, NAVIGATION_MAIN } from '../../const/navigations';
import { useAuth } from '../../components/AuthProvider';

const ScreenForum = ({ navigation }) => {
  const { user } = useAuth();
  const [forumList, setForumList] = useState('');

  useEffect(() => {
    const fetchForumList = async () => {
      try {
        const response = await fetch('http://44.221.91.193:3000/Forum', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        const responseData = await response.json();
        setForumList(responseData.data);
        // alert(jobs[0].jId);
      } catch (error) {
        alert('Forum Error');
      }
    };
    fetchForumList();
  }, []);

  const forumlist = ({ item }) => {
    const formattedTime = new Date(item.createAt).toLocaleString();
    return (
      <TouchableOpacity
        style={styles.AllForum}
        onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
          screen: NAVIGATION_FORUM.post,
          params: { mId: item.mId,
            postId: item.postId,
            title: item.title,
            image: item.image,
            content: item.content,
            createAt: item.createAt }
        })}
      >
        <Text style={styles.AllForumText}>{item.title}</Text>
        <Image
          style={styles.AllForumImage}
          source={{ uri: `data:image/jpeg;base64,${item.image}` }}
        />
        <Text style={styles.AllForumParagraph}>{item.content}</Text>
        <Text style={styles.AllForumTime}>{formattedTime}</Text>
      </TouchableOpacity>
    );
  };

  return (
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
          { user ? (
            <View style={styles.AllForumButtonCircle}>
              <TouchableOpacity
                onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
                  screen: NAVIGATION_FORUM.createForum
                })}
              >
                <MaterialIcons size={30} name="add" color="white" />
              </TouchableOpacity>
            </View>
          ) : (
            <View />
          )}
        </View>
        <FlatList
          data={forumList}
          renderItem={forumlist}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

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
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 330,
    backgroundColor: '#D8BFD8',
    flexDirection: 'column'
  },
  AllForumImage: {
    height: 100,
    width: 100,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 10,
    alignSelf: 'center'
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
    paddingLeft: 150
  }
});

export default ScreenForum;
