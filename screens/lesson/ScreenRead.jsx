import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, TouchableOpacity, Text, FlatList, View, Dimensions } from 'react-native';
import Video from 'react-native-video';
import ProgressBar from './ProgressBar';

const ScreenRead = ({ route, navigation }) => {
  const { lessonId, sectionId } = route.params;
  const [read, setRead] = useState([]);
  const lessonRead = useRef(null);

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
      lessonRead.current.scrollToIndex({ animated: true, index: index + 1 });
    } catch (e) {
      console.log(e);
      navigation.goBack();
    }
  };

  const videoMapping = {
    '1.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Number/1.mp4'),
    '7.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Number/7.mp4'),
    '8.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Number/8.mp4'),
    '9.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Number/9.mp4'),
    '10.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Number/10.mp4'),
    'A.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Letter/A.mp4'),
    'b.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Letter/B.mp4'),
    'C.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Letter/C.mp4'),
    'D.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Letter/D.mp4'),
    'E.mp4': require('../../assets/SignLanguage_Video/DailyCommunication/NumberAndLetter/Letter/E.mp4')
  };

  return (
    <View style={styles.SectionReadBackgound}>
      <FlatList
        data={read}
        showsVerticalScrollIndicator={false}
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={lessonRead}
        renderItem={({ item, index }) => (
          <SectionCard section={item} index={index} videoMapping={videoMapping} onClickNext={onClickNext} />
        )}
      />
    </View>
  );
};

const SectionCard = ({ section, index, videoMapping, onClickNext }) => (
  <View style={styles.SectionReadInformation}>
    <ProgressBar contentLength={5} contentIndex={index} />
    <Video
      video={videoMapping[section.contentData]}
      autoplay={false}
      defaultMuted
      videoWidth={1500}
      videoHeight={1000}
    />
    <Text style={styles.SectionReadText}>English Name: {section.description}</Text>
    <Text style={styles.SectionReadSubText}>Reference: </Text>
    <Text style={styles.SectionReadSubText}>{section.reference}</Text>
    <TouchableOpacity
      style={styles.SectionReadButton}
      onPress={() => onClickNext(index)}
    >
      <Text style={styles.SectionReadButtonText}>{index + 1 !== 10 ? 'Next' : 'Finish'}</Text>
    </TouchableOpacity>
  </View>
);

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
  }
});

export default ScreenRead;
