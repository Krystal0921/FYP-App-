// import React, { useEffect, useState, useRoute, useRef } from 'react';
// import { StyleSheet, Image, TouchableOpacity, Text, FlatList, View, Dimensions, Button } from 'react-native';
// import { Video, ResizeMode } from 'expo-av';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import ProgressBar from './ProgressBar';
// import { videoMapping } from './VideoSource.jsx';
// import NAVIGATION_COURSE from '../../const/navigations';

// const ScreenRead = ({ route, navigation }) => {
//   const videoRef = useRef(null);
//   // const video = React.useRef(null);
//   const [status, setStatus] = React.useState({});
//   const { lessonId, sectionId, mark } = route.params;
//   const [userId, setUserId] = useState(null);
//   // const [mId, lessonIdRecord, sectionIdRecord] = useState(null);
//   const [read, setRead] = useState([]);
//   let lessonRead;

//   useEffect(() => {
//     const getUserId = async () => {
//       try {
//         const userId = await AsyncStorage.getItem('userId');
//         setUserId(userId);
//       } catch (error) {
//         console.error('Error retrieving userId from AsyncStorage:', error);
//       }
//     };

//     getUserId();
//   }, []);

//   useEffect(() => {
//     const fetchSectionData = async () => {
//       try {
//         const data = {
//           lessonId,
//           sectionId
//         };

//         const response = await fetch('http://44.221.91.193:3000/Lesson/Section/Content', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//           setRead(responseData.data);
//         } else {
//           alert(responseData.msg || 'Failed to fetch section data');
//         }
//       } catch (error) {
//         alert(`Lesson Section Error: ${error.message}`);
//       }
//     };

//     fetchSectionData();
//   }, [lessonId, sectionId]);

//   const onClickNext = async (index) => {
//     try {
//       lessonRead.scrollToIndex({ animated: true, index: index + 1 });
//     } catch (e) {
//       console.error(e);
//     }

//     const userId = await AsyncStorage.getItem('userId');

//     try {
//       const response = await fetch('http://44.221.91.193:3000/SectionTaken', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ mId: userId })
//       });

//       const responseData = await response.json();

//       if (responseData.success) {
//         const match = responseData.data.some((record) => (
//           record.sectionId === sectionId
//           && record.userId === userId
//         ));

//         if (match) {
//           navigation.goBack();
//         } else {
//           navigation.navigate(NAVIGATION_COURSE.feedback);
//         }
//       } else {
//         alert(responseData.msg || 'Failed to fetch member progress data');
//       }
//     } catch (error) {
//       console.error('Error fetching member progress data:', error);
//       alert('Failed to fetch member progress data');
//     }
//   };

//   return (
//     <View style={styles.SectionReadBackgound}>
//       <FlatList
//         data={read}
//         showsVerticalScrollIndicator={false}
//         horizontal
//         pagingEnabled
//         scrollEnabled={false}
//         ref={(ref) => {
//           lessonRead = ref;
//         }}
//         renderItem={({ item, index }) => (
//           <View style={styles.SectionReadInformation}>
//             <ProgressBar contentLength={5} contentIndex={index} />

//             <Video
//               ref={videoRef}
//               style={styles.SectionReadImage}
//               playsInSilentLockedModeIOS
//               source={videoMapping[item.contentData]}
//               useNativeControls
//               resizeMode={ResizeMode.CONTAIN}
//               onPlaybackStatusUpdate={(status) => setStatus(() => status)}
//               isMuted
//               volume={1.0}
//             />
//             <Text style={styles.SectionReadText}>English Name: {item.description}</Text>
//             <Text style={styles.SectionReadSubText}>Reference: </Text>
//             <Text style={styles.SectionReadSubText}>{item.reference}</Text>
//             {index + 1 !== 10
//               ? (
//                 <TouchableOpacity
//                   style={styles.SectionReadButton}
//                   onPress={() => onClickNext(index)}
//                 >
//                   <Text style={styles.SectionReadButtonText}>Next</Text>
//                 </TouchableOpacity>
//               )
//               : (
//                 <TouchableOpacity
//                   style={styles.SectionReadButton}
//                   onPress={() => onClickNext(index)}
//                 >
//                   <Text style={styles.SectionReadButtonText}>Finish</Text>
//                 </TouchableOpacity>
//               )}
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   SectionReadSubText: {
//     top: 100,
//     fontSize: 15,
//     paddingBottom: 10
//   },
//   SectionReadText: {
//     top: 80,
//     fontSize: 18,
//     fontWeight: 'bold',
//     paddingBottom: 10
//   },
//   SectionReadInformation: {
//     width: Dimensions.get('screen').width * 0.85,
//     marginRight: 15,
//     padding: 10
//   },
//   SectionReadBackgound: {
//     backgroundColor: '#fff',
//     flex: 1,
//     paddingTop: 10,
//     alignItems: 'center',
//     padding: 20
//   },
//   SectionReadButton: {
//     top: 110,
//     padding: 15,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 5,
//     fontSize: 17,
//     width: 320,
//     backgroundColor: '#264858',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     alignSelf: 'center',
//     alignItems: 'center'
//   },
//   SectionReadButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold'
//   },
//   SectionReadImage: {
//     top: 80,
//     height: 250,
//     width: 320,
//     resizeMode: 'contain',
//     alignSelf: 'center'
//   },
//   SectionReadVideo: {
//     width: Dimensions.get('window').width - 80,
//     height: Dimensions.get('window').width * 0.5625 // 16:9 aspect ratio
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1'
//   },
//   video: {
//     alignSelf: 'center',
//     width: 320,
//     height: 200
//   },
//   buttons: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

// export default ScreenRead;

import React, { useEffect, useState, useRef } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  FlatList
} from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressBar from './ProgressBar';
import { videoMapping } from './VideoSource.jsx';
import { NAVIGATION_COURSE } from '../../const/navigations';

const ScreenRead = ({ route, navigation }) => {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const { lessonId, sectionId, mark } = route.params;
  const [userId, setUserId] = useState(null);
  const [read, setRead] = useState([]);
  let lessonRead;

  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem('userId');
        setUserId(userId);
      } catch (error) {
        console.error('Error retrieving userId from AsyncStorage:', error);
      }
    };

    getUserId();
  }, []);

  useEffect(() => {
    const fetchSectionData = async () => {
      try {
        const data = {
          lessonId,
          sectionId
        };

        const response = await fetch(
          'http://44.221.91.193:3000/Lesson/Section/Content',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        );

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

  const onClickNext = async (index) => {
    const nextIndex = index + 1;
    if (nextIndex < read.length) {
      try {
        lessonRead.scrollToIndex({ animated: true, index: nextIndex });
      } catch (e) {
        console.error(e);
      }
    } else {
      try {
        const mId = userId;
        const response = await fetch('http://44.221.91.193:3000/SectionTaken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ mId, sectionId })
        });

        const responseData = await response.json();
        console.log(`request body:${JSON.stringify({ mId, sectionId })}`);
        if (responseData.success) {
          if (responseData.data === 'has taken') {
            navigation.goBack();
          } else {
            navigation.navigate(NAVIGATION_COURSE.feedback, {
              sectionId,
              lessonId
            });
          }
        } else {
          alert(responseData.msg || 'Failed to fetch member progress data');
        }
      } catch (error) {
        console.error('Error fetching member progress data:', error);
        alert('Failed to fetch member progress data');
      }
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
              source={videoMapping[item.contentData]}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={setStatus}
              isMuted
              volume={1.0}
            />
            <Text style={styles.SectionReadText}>
              English Name: {item.description}
            </Text>
            <Text style={styles.SectionReadSubText}>Reference:</Text>
            <Text style={styles.SectionReadSubText}>{item.reference}</Text>
            <TouchableOpacity
              style={styles.SectionReadButton}
              onPress={() => onClickNext(index)}
            >
              <Text style={styles.SectionReadButtonText}>
                {index + 1 !== 10 ? 'Next' : 'Finish'}
              </Text>
            </TouchableOpacity>
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
