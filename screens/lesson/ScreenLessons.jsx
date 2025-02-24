import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NAVIGATION_COURSE } from "../../const/navigations";
import { useAuth } from "../../components/AuthProvider";

// Image mapping for lesson IDs
const imageMapping = {
  L01: require("../../assets/daily-communication.jpg"),
  L02: require("../../assets/travel-communication.png"),
  L03: require("../../assets/workplace-communication.jpg"),
};

// Get image source based on lesson ID
const getImageSource = (lessonId) => imageMapping[lessonId];

const ScreenLessons = ({ route, navigation }) => {
  const { lessonId, image } = route.params;
  const [section, setSection] = useState([]);
  const [userId, setUserId] = useState(null);
  const { publisUserQuizMark } = useAuth();
  const { user } = useAuth();

  useEffect(() => {
    // Fetch section data for the lesson
    const fetchSectionData = async () => {
      try {
        const data = {
          lessonId,
        };
        const response = await fetch(
          "http://3.212.61.233:3000/Lesson/Section/",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const responseData = await response.json();
        if (responseData.success) {
          setSection(responseData.data);
        } else {
          alert(responseData.msg || "Failed to fetch section data");
        }
      } catch (error) {
        alert(`Lesson Section Error: ${error.message}`);
      }
    };
    fetchSectionData();
  }, [lessonId]);

  const isSectionTaken = async (sectionId) => {
    try {
      if (!user) {
        console.log("public user");
        return false;
      }
      const mId = user.userId;
      const response = await fetch("http://3.212.61.233:3000/SectionTaken", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ mId, sectionId }),
      });
      const responseData = await response.json();
      if (responseData.success) {
        if (responseData.data === "has taken") {
          return true;
        }
        if (responseData.data === "not taken") {
          console.log(mId, sectionId, responseData.data);
          return false;
        }
      }
    } catch (error) {
      console.error("Error fetching member progress data:", error);
      alert("Failed to fetch member progress datas");
      return false;
    }
  };

  const LessonContentList = ({ session, index }) => {
    const [isTaken, setIsTaken] = useState(false);
    // Check if the section is taken by the user
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

        <TouchableOpacity
          style={styles.LessonButtonCircle}
          onPress={() =>
            navigation.navigate(NAVIGATION_COURSE.read, {
              name: session.sectionTitle,
              lessonId: session.lessonId,
              sectionId: session.sectionId,
            })
          }
        >
          {isTaken ? (
            <Image
              style={styles.logo}
              source={require("../../assets/tick-mark.png")}
            />
          ) : (
            <MaterialIcons size={40} name="play-arrow" />
          )}
        </TouchableOpacity>
      </View>
    );
  };

  const QuizSection = ({ session }) => {
    const [mark, setQuizMark] = useState(0);

    useEffect(() => {
      const fetchQuizMark = async () => {
        try {
          if (!user) {
            console.log(`public user:${user}`);
            await publisUserQuizMark(mark, lessonId);
            const storedMarkData = await AsyncStorage.getItem("markData");
            const parsedMarkData = JSON.parse(storedMarkData);
            const mark = parsedMarkData[lessonId]?.mark;
            console.log(`storedMarkData:${storedMarkData}`);
            setQuizMark(mark);
          } else {
            const mId = user.userId;
            const response = await fetch("http://3.212.61.233:3000/QuizMark", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ mId, lessonId }),
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
              alert(responseData.msg || "Failed to fetch quiz mark data");
            }
          }
        } catch (error) {
          console.error("Error fetching quiz mark data:", error);
        }
      };
      fetchQuizMark();
    }, [lessonId]);

    console.log(`marks:${mark}`);
    return (
      <View style={styles.QuizSectionContainer}>
        <TouchableOpacity
          style={styles.QuizButton}
          onPress={() =>
            navigation.navigate(NAVIGATION_COURSE.quiz, {
              screen: NAVIGATION_COURSE.quiz,
              data: lessonId,
            })
          }
        >
          <Text style={styles.QuizButtonText}>Take Quiz {mark} / 10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.AIquizButton}
          onPress={() =>
            navigation.navigate(NAVIGATION_COURSE.aiQuiz, {
              screen: NAVIGATION_COURSE.aiQuiz,
              data: lessonId,
            })
          }
        >
          <Text style={styles.AIquizButtonText}>AI Quiz </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
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

// Styles
const styles = StyleSheet.create({
  AllLessonBackgroundView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: "row",
  },
  AllLessonNumber: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#a6a8b3",
  },
  AllLessonTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  LessonImageBackground: {
    height: 300,
    paddingTop: 40,
    paddingRight: 20,
    paddingLeft: 20,
    alignItems: "center",
  },
  LessonButtonCircle: {
    width: 40,
    height: 40,
    backgroundColor: "#a6a6a6",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  LessonLinkView: {
    justifyContent: "center",
    flexDirection: "row",
  },
  LessonLinkText: {
    paddingTop: 15,
    paddingBottom: 10,
    color: "blue",
  },
  LessonContentView: {
    flex: 1,
    marginTop: -35,
    backgroundColor: "#fff",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    height: "100%",
  },
  LessonContentText: {
    marginBottom: 20,
    marginHorizontal: 20,
    fontSize: 21,
    fontWeight: "bold",
  },
  QuizSectionContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  QuizButton: {
    marginBottom: 10,
    backgroundColor: "#8B0960",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  QuizButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  AIquizButton: {
    marginBottom: 10,
    backgroundColor: "#194680",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  AIquizButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  greenTick: {
    marginLeft: 10,
    color: "green",
  },
  logo: {
    width: 60,
    height: 54,
  },
});

export default ScreenLessons;
