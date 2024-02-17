import React, { useEffect, useState, useRoute } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, FlatList, View, Dimensions } from 'react-native';
import ProgressBar from './ProgressBar';

const ScreenRead = ({ route, navigation }) => {
  const { lessonId } = route.params;
  const { sectionId } = route.params;
  const [read, setRead] = useState([]);
  let lessonRead;

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const data = {
          lessonId,
          sectionId
        };

        const response = await fetch('http://44.221.91.193:3000/Lesson/Section/Content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        const responseData = await response.json();

        if (responseData.success) {
          setRead(responseData.data);
        } else {
          alert(responseData.msg || 'Failed to fetch section data');
        }
      } catch (error) {
        alert(`Lesson Section Error: ${error.message}`);
      }
    };

    fetchSectionData();
  }, [lessonId, sectionId]);

  const onClickNext = (index) => {
    try {
      lessonRead.scrollToIndex({ animated: true, index: index + 1 });
    } catch (e) {
      console.log();
      navigation.goBack();
    }
  };

  return (
    <View style={styles.SectionReadBackgound}>
      <FlatList
        data={read}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={(ref) => {
          lessonRead = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={styles.SectionReadInformation}>
            <ProgressBar contentLength={5} contentIndex={index} />
            <Image style={styles.SectionReadImage} source={item.rImage} />
            <Text style={styles.SectionReadText}>English Name: {item.description}</Text>
            <Text style={styles.SectionReadSubText}>Reference: </Text>
            <Text style={styles.SectionReadSubText}>{item.reference}</Text>
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
  SectionReadSubText: {
    fontSize: 15,
    top: 100,
    paddingBottom: 10
  },
  SectionReadText: {
    fontSize: 18,
    fontWeight: 'bold',
    top: 100,
    paddingBottom: 10
  },
  SectionReadInformation: {
    width: Dimensions.get('screen').width * 0.85,
    marginRight: 15,
    padding: 10
  },
  SectionReadBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
    padding: 20
  },
  SectionReadButton: {
    top: 110,
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    fontSize: 17,
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
