import React, { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Alert,
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Video, ResizeMode } from "expo-av";
import * as Animatable from "react-native-animatable";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RadioButton } from "react-native-paper";
import { videoMapping } from "./VideoSource.jsx";
import background from "../../assets/0.png";
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from "../../const/navigations";
import { useAuth } from "../../components/AuthProvider";

const ScreenQuiz = ({ route, navigation }) => {
  const videoRef = useRef(null);
  const { data } = route.params;
  const lessonId = data;
  const [userId, setUserId] = useState(null);
  const [status, setStatus] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [read, setRead] = useState([]);
  const [checked, setChecked] = useState("first");
  const [marks, setMark] = useState(0);
  const { publisUserQuizMark } = useAuth();
  const { user } = useAuth();

  const lessonQuizRef = useRef(null);
  const lessonNames = {
    L01: "Daily Communication",
    L02: "Travel Communication",
    L03: "Workplace Communication",
  };

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        let url;
        let data;

        if (!user) {
          // Use publicQuiz endpoint if user is null
          url = "http://3.212.61.233:3000/Lesson/Section/publicQuiz";
          data = {
            lessonId,
          };
        } else {
          url = "http://3.212.61.233:3000/Lesson/Section/Quiz";
          data = {
            mId: user.userId,
            lessonId,
          };
        }

        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (responseData.success) {
          setRead(responseData.data);
        } else {
          // alert(responseData.msg || "Failed to fetch quiz data");
        }
      } catch (error) {
        alert(`Quiz Error: ${error.message}`);
      }
    };

    fetchQuizData();
  }, [userId, lessonId]);

  const handleRadioPress = (value) => {
    setChecked(value);
  };

  const onClickNext = async (index, correctAns) => {
    const nextIndex = index + 1;

    console.log(`${checked} = ${correctAns}`);
    if (checked === null) {
      Alert.alert("Please choose the answer!");
      return;
    }

    if (checked === correctAns) {
      setMark((prevMark) => {
        const newMark = prevMark + 1;
        console.log("Mark:", newMark);
        return newMark;
      });

      Alert.alert("Correct Answer", "Great job!", [
        {
          text: "OK",
          onPress: () => {
            if (nextIndex < read.length) {
              try {
                lessonQuizRef.current.scrollToIndex({
                  animated: true,
                  index: nextIndex,
                });
              } catch (e) {
                console.error(e);
              }
            } else {
              showFinishAlert();
            }
          },
        },
      ]);
      console.log("Prev Mark:", marks);
      if (nextIndex < read.length) {
        try {
          lessonQuizRef.current.scrollToIndex({
            animated: true,
            index: nextIndex,
          });
        } catch (e) {
          console.error(e);
        }
      }
    } else {
      Alert.alert("Incorrect Answer", `The correct answer is ${correctAns}`, [
        {
          text: "OK",
          onPress: () => {
            if (nextIndex < read.length) {
              try {
                lessonQuizRef.current.scrollToIndex({
                  animated: true,
                  index: nextIndex,
                });
              } catch (e) {
                console.error(e);
              }
            } else {
              showFinishAlert();
            }
          },
        },
      ]);
    }

    setChecked(null);

    const showFinishAlert = async () => {
      try {
        if (!user) {
          await publisUserQuizMark(marks, lessonId);
        } else {
          const mId = user.userId;
          const mark = marks;
          console.log(mId);

          const data = {
            mId,
            lessonId,
            mark,
          };

          const response = await fetch(
            "http://3.212.61.233:3000/InsertQuizMark",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            }
          );
          console.log(`${mId} ${lessonId} ${mark}`);

          const responseData = await response.json();
          if (responseData.success) {
            console.log(`${mark} mark insert`);
          } else {
            alert(responseData.msg || "Failed to fetch insert quiz mark data");
          }
        }

        Alert.alert(`Congratulations! Your mark is ${marks} / 10`);

        if (lessonId in lessonNames) {
          navigation.navigate(NAVIGATION_MAIN.lesson, {
            screen: NAVIGATION_COURSE.lessons,
            params: { lessonId, name: lessonNames[lessonId] },
          });
        }
      } catch (error) {
        console.error("Error fetching insert quiz mark data:", error);
      }
    };
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
          lessonQuizRef.current = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={styles.SectionReadInformation}>
            <Text>{index + 1} / 10</Text>

            <Video
              ref={videoRef}
              style={styles.SectionReadImage}
              source={videoMapping[item.contentData]}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              onPlaybackStatusUpdate={setStatus}
              isMuted
              volume={0}
            />

            {/* <Text style={styles.SectionReadText}>Question:</Text> */}
            <Text style={styles.SectionReadText}>{item.question}</Text>
            <View style={styles.SectionRadioButtonView}>
              <View style={styles.SectionRadioButtonRow}>
                <RadioButton.Item
                  label={`A. ${item.optionAns1}`}
                  value={item.optionAns1}
                  status={checked === item.optionAns1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioPress(item.optionAns1)}
                />
                <RadioButton.Item
                  label={`B. ${item.optionAns2}`}
                  value={item.optionAns2}
                  status={checked === item.optionAns2 ? "checked" : "unchecked"}
                  onPress={() => handleRadioPress(item.optionAns2)}
                />
                <RadioButton.Item
                  label={`C. ${item.optionAns3}`}
                  value={item.optionAns3}
                  status={checked === item.optionAns3 ? "checked" : "unchecked"}
                  onPress={() => handleRadioPress(item.optionAns3)}
                />
                <RadioButton.Item
                  label={`D. ${item.optionAns4}`}
                  value={item.optionAns4}
                  status={checked === item.optionAns4 ? "checked" : "unchecked"}
                  onPress={() => handleRadioPress(item.optionAns4)}
                />
              </View>
            </View>
            <TouchableOpacity
              style={styles.SectionReadButton}
              onPress={() => onClickNext(index, item.correctAns)}
            >
              <Text style={styles.SectionReadButtonText}>
                {index + 1 !== 10 ? "Next Question" : "Finish"}
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
    paddingBottom: 10,
  },
  SectionReadText: {
    textAlign: "center",
    top: 30,
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 10,
    paddingBottom: 20,
  },
  SectionReadInformation: {
    width: Dimensions.get("screen").width * 0.9,
    marginRight: 15,
  },
  SectionReadBackgound: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    padding: 25,
  },
  SectionReadButton: {
    padding: 10,
    borderRadius: 5,
    fontSize: 17,
    width: 320,
    backgroundColor: "#264858",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignSelf: "center",
    alignItems: "center",
  },
  SectionReadButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  SectionReadImage: {
    top: 40,
    height: 250,
    width: 320,
    resizeMode: "contain",
    alignSelf: "center",
  },
  SectionReadVideo: {
    width: Dimensions.get("window").width - 80,
    height: Dimensions.get("window").width * 0.5625, // 16:9 aspect ratio
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  SectionRadioButtonRow: {
    paddingTop: 10,
    marginRight: 10,
    marginLeft: 6,
  },
  SectionRadioButtonView: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default ScreenQuiz;
