import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, FlatList, View, Dimensions } from 'react-native';
import courses from '../../const/courses';

const ScreenRead = ({ route, navigation }) => {
  const { name, data } = route.params;
  const [progress, setProgress] = useState(1 / 10);
  let lessonRead;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClickNext = (index) => {
    setProgress((index + 2) / 10);
    try {
      lessonRead.scrollToIndex({ animated: true, index: index + 1 });
    } catch (e) {
      console.log();
    }
  };
  return (
    <View style={styles.SectionReadBackgound}>
      <FlatList
        data={data.page}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={(ref) => {
          lessonRead = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={styles.SectionReadInformation}>
            <Image style={styles.SectionReadImage} source={item.rImage} />
            <Text>{item.rId}</Text>
            <Text style={styles.SectionReadText}>English Name is: {item.rName}</Text>
            {index + 1 != 10
              ? (
                <TouchableOpacity
                  style={styles.SectionReadButton}
                  onPress={() => onClickNext(index)}
                >
                  <Text style={styles.SectionReadButtonText}>Next</Text>
                </TouchableOpacity>
              )
              : (
                <TouchableOpacity
                  style={styles.SectionReadButton}
                  onPress={() => onClickNext(index)}
                >
                  <Text style={styles.SectionReadButtonText}>Finish</Text>
                </TouchableOpacity>
              )}
          </View>
        )}
      />
    </View>
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
    alignItems: 'center',
    padding: 20
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
