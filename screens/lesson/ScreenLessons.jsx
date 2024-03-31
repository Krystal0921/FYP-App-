// import React, { useEffect, useState } from 'react';
// import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
// import { MaterialIcons } from '@expo/vector-icons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { NAVIGATION_COURSE } from '../../const/navigations';

// const imageMapping = {
//   'daily-communication.jpg': require('../../assets/daily-communication.jpg'),
//   'travel-communication.png': require('../../assets/travel-communication.png'),
//   'workplace-communication.jpg': require('../../assets/workplace-communication.jpg')
// };

// const getImageSource = (imageFilename) => imageMapping[imageFilename];

// const ScreenLessons = ({ route, navigation }) => {

// const [userId, setUserId] = useState(null);
//   const { lessonId, image } = route.params;
//   const [section, setSection] = useState([]);

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
//           lessonId
//         };

//         const response = await fetch('http://44.221.91.193:3000/Lesson/Section/', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(data)
//         });

//         const responseData = await response.json();

//         if (responseData.success) {
//           setSection(responseData.data);
//         } else {
//           alert(responseData.msg || 'Failed to fetch section data');
//         }
//       } catch (error) {
//         alert(`Lesson Section Error: ${error.message}`);
//       }
//     };

//     fetchSectionData();
//   }, [lessonId]);

//   const isSectionTaken = async (sectionId) => {
//     try {
//       const mId = userId;
//       const response = await fetch('http://44.221.91.193:3000/SectionTaken', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({  mId, sectionId })
//       });

//       const responseData = await response.json();

//       if (responseData.success) {
//         if (responseData.data === 'has taken') {
//           console.log(mId, sectionId, responseData.data);
//           return true;
//         } else if (responseData.data === 'not taken') {
//           console.log(mId, sectionId, responseData.data);
//           return false;
//         }

//       } else {
//         alert(responseData.msg || 'Failed to fetch membe r progress data');
//         return false;
//       }
//     } catch (error) {
//       console.error('Error fetching member progress data:', error);
//       alert('Failed to fetch member progress data');
//       return false;
//     }
//   };

//   const LessonContentList = ({ session, index }) => (

//     <View style={styles.AllLessonBackgroundView}>
//       <Text style={styles.AllLessonNumber}>{`0${index + 1}`}</Text>
//       <View style={{ paddingHorizontal: 20, flex: 1 }}>
//         <Text style={styles.AllLessonTitle}>{session.sectionTitle}
//        </Text>

//        <View>

//        isSectionTaken({session.sectionId})
//   </View>
//       </View>
//       {isSectionTaken(session.sectionId).value ===  true ? (
//   <Text style={styles.greenTick}>✔️</Text>
// ) : null}

//       <TouchableOpacity
//         style={styles.LessonButtonCircle}
//         onPress={() => navigation.navigate(NAVIGATION_COURSE.read, {
//           name: session.sectionTitle, lessonId: session.lessonId, sectionId: session.sectionId
//         })}
//       >
//         <MaterialIcons size={40} name="play-arrow" />
//       </TouchableOpacity>
//     </View>
//   );

//   const QuizSection = ({ session }) => (
//     <View style={styles.QuizSectionContainer}>
//       <TouchableOpacity
//         style={styles.QuizButton}
//         onPress={() => navigation.navigate(NAVIGATION_COURSE.quiz, {
//           screen: NAVIGATION_COURSE.quiz,
//           data: session
//         })}
//       >
//         <Text style={styles.QuizButtonText}>Take Quiz</Text>
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
//       <ImageBackground
//         source={getImageSource(image)}
//         style={styles.LessonImageBackground}
//       />
//       <View style={styles.LessonContentView}>
//         <View style={styles.LessonLinkView}>
//           <Text style={styles.LessonLinkText}>Please click here for more information of this lesson</Text>
//         </View>
//         <Text style={styles.LessonContentText}>Lesson Content</Text>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={section}
//           keyExtractor={(item, index) => index.toString()}
//           renderItem={({ item, index }) => (
//             <LessonContentList session={item} index={index} />
//           )}
//           ListFooterComponent={QuizSection}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   AllLessonBackgroundView: {
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     flexDirection: 'row'
//   },
//   AllLessonNumber: {
//     fontSize: 40,
//     fontWeight: 'bold',
//     color: '#E4E7F4'
//   },
//   AllLessonTitle: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   LessonImageBackground: {
//     height: 300,
//     paddingTop: 40,
//     paddingRight: 20,
//     paddingLeft: 20,
//     alignItems: 'center'
//   },
//   LessonButtonCircle: {
//     width: 40,
//     height: 40,
//     backgroundColor: '#E0E0E0',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginLeft: 10
//   },
//   LessonLinkView: {
//     justifyContent: 'center',
//     flexDirection: 'row'
//   },
//   LessonLinkText: {
//     paddingTop: 15,
//     paddingBottom: 10,
//     color: 'blue'
//   },
//   LessonContentView: {
//     flex: 1,
//     marginTop: -35,
//     backgroundColor: '#fff',
//     borderTopRightRadius: 50,
//     borderTopLeftRadius: 50,
//     height: '100%'
//   },
//   LessonContentText: {
//     marginBottom: 20,
//     marginHorizontal: 20,
//     fontSize: 21,
//     fontWeight: 'bold'
//   },
//   QuizSectionContainer: {
//     paddingHorizontal: 20,
//     paddingVertical: 15,
//     backgroundColor: '#8B0960',
//     borderRadius: 10,
//     marginBottom: 10
//   },
//   QuizButton: {
//     backgroundColor: '#8B0960',
//     paddingVertical: 10,
//     borderRadius: 5,
//     alignItems: 'center'
//   },
//   QuizButtonText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
//   greenTick: {
//     marginLeft: 10,
//     color: 'green',
//   },
// });

// export default ScreenLessons;

import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NAVIGATION_COURSE } from '../../const/navigations';

const imageMapping = {
  L01: require('../../assets/daily-communication.jpg'),
  L02: require('../../assets/travel-communication.png'),
  L03: require('../../assets/workplace-communication.jpg')
};

const getImageSource = (lessonId) => imageMapping[lessonId];

const ScreenLessons = ({ route, navigation }) => {
  const [userId, setUserId] = useState(null);
  const { lessonId, image } = route.params;
  const [section, setSection] = useState([]);

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
          lessonId
        };

        const response = await fetch(
          'http://44.221.91.193:3000/Lesson/Section/',
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
          setSection(responseData.data);
        } else {
          alert(responseData.msg || 'Failed to fetch section data');
        }
      } catch (error) {
        alert(`Lesson Section Error: ${error.message}`);
      }
    };

    fetchSectionData();
  }, [lessonId]);

  const isSectionTaken = async (sectionId) => {
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

      if (responseData.success) {
        if (responseData.data === 'has taken') {
          return true;
        } if (responseData.data === 'not taken') {
          console.log(mId, sectionId, responseData.data);
          //  console.log(mId, sectionId, responseData.data);
          return false;
        }
      } else {
        alert(responseData.msg || 'Failed to fetch member progress data');
        return false;
      }
    } catch (error) {
      console.error('Error fetching member progress data:', error);
      alert('Failed to fetch member progress data');
      return false;
    }
  };

  const LessonContentList = ({ session, index }) => {
    const [isTaken, setIsTaken] = useState(false);

    useEffect(() => {
      const checkSectionTaken = async () => {
        const sectionTaken = await isSectionTaken(session.sectionId);
        setIsTaken(sectionTaken);
      };

      checkSectionTaken();
    }, [session.sectionId]);

    return (
      <View style={styles.AllLessonBackgroundView}>
        <Text style={styles.AllLessonNumber}>{`0${index + 1}`}</Text>
        <View style={{ paddingHorizontal: 20, flex: 1 }}>
          <Text style={styles.AllLessonTitle}>{session.sectionTitle}</Text>
        </View>
        {isTaken ? <Text style={styles.greenTick}>✔️</Text> : null}
        <TouchableOpacity
          style={styles.LessonButtonCircle}
          onPress={() => navigation.navigate(NAVIGATION_COURSE.read, {
            name: session.sectionTitle,
            lessonId: session.lessonId,
            sectionId: session.sectionId
          })}
        >
          <MaterialIcons size={40} name="play-arrow" />
        </TouchableOpacity>
      </View>
    );
  };

  const QuizSection = ({ session }) => {
    const [mark, setQuizMark] = useState(0);

    useEffect(() => {
      const fetchQuizMark = async () => {
        try {
          if (!userId) {
            const storedMarkData = await AsyncStorage.getItem('markData');
            const parsedMarkData = JSON.parse(storedMarkData);
            const { mark } = parsedMarkData[lessonId];
            setQuizMark(mark);
          } else {
            const mId = userId;
            const response = await fetch('http://44.221.91.193:3000/QuizMark', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ mId, lessonId })
            });
            console.log(mId + lessonId);

            const responseData = await response.json();

            if (responseData.success) {
              if (responseData.data && responseData.data.length > 0) {
                const { score } = responseData.data[0];
                console.log(score);
                setQuizMark(score);
              } else {
                setQuizMark(0);
              }
            } else {
              // alert(responseData.msg || 'Failed to fetch quiz mark data');
            }
          }
        } catch (error) {
          console.error('Error fetching quiz mark data:', error);
          // alert('Failed to fetch quiz mark data');
        }
      };

      fetchQuizMark();
    }, [lessonId]);

    return (
      <View style={styles.QuizSectionContainer}>
        <TouchableOpacity
          style={styles.QuizButton}
          onPress={() => navigation.navigate(NAVIGATION_COURSE.quiz, {
            screen: NAVIGATION_COURSE.quiz,
            data: lessonId,
            lessonName
          })}
        >
          <Text style={styles.QuizButtonText}>Take Quiz {mark}/10</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <ImageBackground
        source={getImageSource(lessonId)}
        style={styles.LessonImageBackground}
      />
      <View style={styles.LessonContentView}>
        <View style={styles.LessonLinkView}>
          <Text style={styles.LessonLinkText}>
            Please click here for more information of this lesson
          </Text>
        </View>
        <Text style={styles.LessonContentText}>Lesson Content</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={section}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <LessonContentList session={item} index={index} />
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
  },
  greenTick: {
    marginLeft: 10,
    color: 'green'
  }
});

export default ScreenLessons;
