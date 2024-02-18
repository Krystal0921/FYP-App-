import React, { useEffect, useState, useRoute, useRef } from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, FlatList, View, Dimensions, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { height, width } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import ProgressBar from './ProgressBar';
import { videoMapping } from './VideoSource.jsx';

const ScreenRead = ({ route, navigation }) => {
  const videoRef = useRef(null);
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
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
      console.log(e);
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

            <Video
              ref={videoRef}
              style={styles.SectionReadImage}
              playsInSilentLockedModeIOS
              source={videoMapping[item.contentData]}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              isMuted
              volume={1.0}
            />
            <Text style={styles.SectionReadText}>English Name: {item.description}</Text>
            <Text style={styles.SectionReadSubText}>Reference: </Text>
            <Text style={styles.SectionReadSubText}>{item.reference}</Text>
            {index + 1 !== 10
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
    top: 100,
    fontSize: 15,
    paddingBottom: 10
  },
  SectionReadText: {
    top: 80,
    fontSize: 18,
    fontWeight: 'bold',
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
    width: 320,
    backgroundColor: '#264858',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: 'center',
    alignItems: 'center'
  },
  SectionReadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  SectionReadImage: {
    top: 80,
    height: 250,
    width: 320,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  SectionReadVideo: {
    width: Dimensions.get('window').width - 80,
    height: Dimensions.get('window').width * 0.5625 // 16:9 aspect ratio
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1'
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ScreenRead;
