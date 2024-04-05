import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_FORUM, NAVIGATION_MAIN } from '../../const/navigations';
import { useAuth } from '../../components/AuthProvider';

const ScreenForum = ({ navigation }) => {
  const { user } = useAuth();
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

        <TouchableOpacity
          style={styles.AllForum}
          onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
            screen: NAVIGATION_FORUM.post
          })}
        >
          <Text style={styles.AllForumText}>How accurate for battery level is myPhonak app?</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/myPhonak_app.png')}
          />
          <Text style={styles.AllForumParagraph}>Lately I have been leaving my KS9s turned on and in my ears all night streaming nature sounds and music in order to block out the neighborhood "disk jockey" who was keeping me up all night. (I tried every type and strength of earplugs first and none were )</Text>
          <Text style={styles.AllForumTime}>2024-01-16 19:29:47</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.AllForum}
          onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
            screen: NAVIGATION_FORUM.post
          })}
        >
          <Text style={styles.AllForumText}>Assessment for Cochlear Implant - I'm a candidate!</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/cochlear_implant.jpg')}
          />
          <Text style={styles.AllForumParagraph}>Yesterday was assessment day. We were up very early to make the drive to Toronto and arrived in plenty of time, which was a very good thing as there was a long line-up to enter the main entrance to the hospital that snaked well down the sidewalk. It was v</Text>
          <Text style={styles.AllForumTime}>2024-01-17 09:51:36</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.AllForum}
          onPress={() => navigation.navigate(NAVIGATION_MAIN.post, {
            screen: NAVIGATION_FORUM.post
          })}
        >
          <Text style={styles.AllForumText}>Borderline for hearing aids?</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/Borderline.jpg')}
          />
          <Text style={styles.AllForumParagraph}>I saw an MD/ENT today due to my own perceived hearing loss. Did a hearing test which included bone conduction and tympany I think (was not sure exactly what it was). He said he doesn't think I will benefit from HA because my loss, such as it is, is mostly</Text>
          <Text style={styles.AllForumTime}>2024-01-17 09:51:36</Text>
        </TouchableOpacity>
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
    paddingLeft: 170
  }
});

export default ScreenForum;
