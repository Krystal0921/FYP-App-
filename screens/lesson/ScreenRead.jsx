import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Text, FlatList, View, Dimensions } from 'react-native';
import courses from '../../const/courses';

const ScreenRead = ({ route, navigation }) => {
  let lessonRead;
  const [currentIndex, setCurrentIndex] = useState(0);
  const onClickNext = (index) => {
    lessonRead.scrollToIndex({ animated: true, index: index + 1 });
  };

  const LessonRead = ({ course }) => (
    <View style={styles.SectionReadInformation}>
      <Image style={styles.SectionReadImage} source={course.image} />
      <TouchableOpacity
        style={styles.SectionReadButton}
        onPress={() => onClickNext(index)}
      >
        <Text style={styles.SectionReadButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.SectionReadBackgound}>
      <FlatList
        data={courses}
        horizontal
        pagingEnabled
        ref={(ref) => {
          lessonRead = ref;
        }}
        renderItem={({ item, index }) => <LessonRead course={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  SectionReadInformation: {
    width: Dimensions.get('screen').width * 0.85,
    marginRight: 15,
    padding: 10
  },
  SectionReadBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center'
  },
  SectionReadButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  SectionReadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  SectionReadImage: {
    height: 300,
    width: 300,
    resizeMode: 'contain'
  }
});

export default ScreenRead;
