import React from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_COURSE } from '../../const/navigations';

const ScreenLessons = ({ route, navigation }) => {
  const { data } = route.params;

  const LessonContentList = ({ content, index }) => (
    <View style={styles.AllLessonBackgroundView}>
      <Text style={styles.AllLessonNumber}>{`0${index + 1}`}</Text>
      <View style={{ paddingHorizontal: 20, flex: 1 }}>
        <Text style={styles.AllLessonTitle}>{content.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.LessonButtonCircle}
        onPress={() => navigation.navigate(NAVIGATION_COURSE.read, {
<<<<<<< Updated upstream
          screen: NAVIGATION_COURSE.read
=======
          name: session.id, data: session
>>>>>>> Stashed changes
        })}
      >
        <MaterialIcons size={40} name="play-arrow" />
      </TouchableOpacity>
    </View>
  );

  const QuizSection = ({ session }) => (
    <View style={styles.QuizSectionContainer}>
      <TouchableOpacity
        style={styles.QuizButton}
        onPress={() => navigation.navigate(NAVIGATION_COURSE.quiz, {
          data: session
        })}
      >
        <Text style={styles.QuizButtonText}>Take Quiz</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ImageBackground
        source={data.image}
        style={styles.LessonImageBackground}
      />
      <View style={styles.LessonContentView}>
        <View style={styles.LessonLinkView}>
          <Text style={styles.LessonLinkText}>Please click here for more information of this lesson</Text>
        </View>
        <Text style={styles.LessonContentText}>Lesson Content</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data.courseContent}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <LessonContentList index={index} content={item} />
          )}
          ListFooterComponent={QuizSection}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  AllLessonBackgroundView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row'
  },
  AllLessonNumber: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#E4E7F4'
  },
  AllLessonTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  LessonImageBackground: {
    height: 300,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: 'center'
  },
  LessonButtonCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10
  },
  LessonLinkView: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  LessonLinkText: {
    paddingTop: 15,
    paddingBottom: 10,
    color: 'blue'
  },
  LessonContentView: {
    flex: 1,
    marginTop: -35,
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: '100%'
  },
  LessonContentText: {
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 21,
    fontWeight: 'bold'
  },
  QuizSectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#8B0960',
    borderRadius: 10,
    marginBottom: 10
  },
  QuizButton: {
    backgroundColor: '#8B0960',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  QuizButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ScreenLessons;
