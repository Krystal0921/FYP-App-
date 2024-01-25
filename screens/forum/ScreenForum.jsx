import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ScreenForum = ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.AllForumScrollView}>
    <SafeAreaView style={styles.AllForumBackgound}>
      <Text style={styles.AllForumTitle}>All Forum</Text>
      <View style={styles.AllForumSearch}>
        <View style={styles.AllForumScreenView}>
          <Icon style={styles.AllForumIcon} size={30} name="search" />
          <TextInput
            style={styles.AllForumSearchText}
            placeholder="Search for anything"
          />
        </View>
        <View style={styles.AllForumButtonCircle}>
          <TouchableOpacity>
            <Icon style={styles.AllForumButtonPlayArrow} name="add" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.AllForum}>
        <Pressable
          style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}
          onPress={() => navigation.navigate('ForumScreen', {})}
        >
          <Text style={styles.AllForumText}>First Post</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/setting-icon.png')}
          />
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </Pressable>
      </View>
      <View style={styles.AllForum}>
        <View>
          <Text style={styles.AllForumText}>Second Post</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/setting-icon.png')}
          />
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.AllForum}>
        <View>
          <Text style={styles.AllForumText}>Third Post</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/setting-icon.png')}
          />
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.AllForum}>
        <View>
          <Text style={styles.AllForumText}>Fourth Post</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/setting-icon.png')}
          />
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.AllForum}>
        <View>
          <Text style={styles.AllForumText}>Fifth Post</Text>
          <Image
            style={styles.AllForumImage}
            source={require('../../assets/setting-icon.png')}
          />
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </View>
      <View style={styles.AllForum}>
        <Image
          style={styles.AllForumImage}
          source={require('../../assets/setting-icon.png')}
        />
        <View>
          <Text style={styles.AllForumText}>Sixth Post</Text>
          <Text style={styles.AllForumParagraph}>paragraph</Text>
          <Text style={styles.AllForumTime}>21:01:2024 19:57</Text>
        </View>
      </View>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  MainFooter: {
    flexDirection: 'row',
    height: 40,
    paddingTop: 10,
    backgroundColor: '#55098b',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  MainIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5
  },
  AllForumTitleView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  AllForumButtonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#264858',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  AllForumButtonPlayArrow: {
    fontSize: 25,
    color: '#fff'
  },
  AllForumTime: {
    fontWeight: '600',
    paddingTop: 100,
    paddingLeft: 120
  },
  AllForumScrollView: {
    flexGrow: 1
  },
  AllForumIcon: {
    paddingTop: 13,
    paddingLeft: 10
  },
  AllForumSearchText: {
    fontSize: 18,
    marginLeft: 5,
    flex: 1,
    paddingHorizontal: 20
  },
  AllForumCreateButtonText: {
    color: '#f194ff'
  },
  AllForumBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    paddingTop: 50
  },
  AllForumSearch: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    flexDirection: 'row'
  },
  AllForumScreenView: {
    width: 300,
    height: 50,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: '#F5F5F7'
  },
  AllForumTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  AllForum: {
    marginTop: 10,
    paddingBottom: 10,
    borderRadius: 10,
    width: 330,
    backgroundColor: '#D0B3A0',
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
  }
});

export default ScreenForum;
