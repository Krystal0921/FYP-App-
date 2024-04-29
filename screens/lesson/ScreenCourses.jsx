import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  Dimensions,
  FlatList,
  TextInput,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from "../../const/navigations";
import background from "../../assets/backgroundd.png";

// Get window dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

// Define the ScreenCourses component
const ScreenCourses = ({ navigation }) => {
  // State to store the courses
  const [courses, setCourses] = useState([]);

  // Fetch courses from the server on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Make a request to fetch courses
        const response = await fetch("http://3.212.61.233:3000/Lesson/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({}),
        });
        // Parse the response data
        const responseData = await response.json();
        // Update the courses state if the request is successful
        if (responseData.success) {
          setCourses(responseData.data);
        } else if (responseData.code === 1) {
          alert(responseData.msg);
        } else {
          alert("Wrong username or password");
        }
      } catch (error) {
        alert("Courses Error");
      }
    };
    fetchCourses();
  }, []);

  // Define the CourseCard component
  const CourseCard = ({ course }) => {
    // Mapping of image filenames to image sources
    const imageMapping = {
      "daily-communication.jpg": require("../../assets/daily-communication.jpg"),
      "travel-communication.png": require("../../assets/travel-communication.png"),
      "workplace-communication.jpg": require("../../assets/workplace-communication.jpg"),
    };

    // Function to get the image source based on the filename
    const getImageSource = (imageFilename) => imageMapping[imageFilename];

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate(NAVIGATION_MAIN.lesson, {
            screen: NAVIGATION_COURSE.lessons,
            params: { lessonId: course.lessonId, name: course.lessonName },
          })
        }
      >
        <ImageBackground
          source={getImageSource(course.lessonPhoto)}
          style={styles.MainAllLessonBackground}
        >
          <Text multiline numberOfLines={2} style={styles.MainAllLessonTitle}>
            {course.lessonName}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // Render the component
  return (
    <SafeAreaView style={styles.MainBackground}>
      {/* Header */}
      <View style={styles.MainTitleImageView}>
        <Image style={styles.MainTitleImage} source={background} />
      </View>

      {/* Search and All Lessons */}
      <View>
        <View style={styles.MainSearchView}>
          <MaterialIcons size={30} name="search" />
          <TextInput
            style={styles.MainSearchText}
            placeholder="Search for anything"
          />
        </View>
        <View style={styles.MainAllLessonTextView}>
          <Text style={styles.MainAllLessonText}>All Lessons</Text>
        </View>
      </View>

      {/* Course List */}
      <View style={styles.MainAllLessonList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={courses}
          keyExtractor={(index) => index.toString()}
          renderItem={({ item }) => <CourseCard course={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  MainAllLessonList: {
    flex: 1,
  },
  MainAllLessonTextView: {
    paddingVertical: 10,
  },
  MainAllLessonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  MainSearchText: {
    fontSize: 18,
    marginLeft: 5,
  },
  MainSearchView: {
    height: 60,
    marginTop: 35,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: "#F5F5F7",
    borderRadius: 30,
    alignItems: "center",
    flexDirection: "row",
  },
  MainTitleImageView: {
    justifyContent: "center",
    alignItems: "center",
  },
  MainTitleImage: {
    height: 150,
    width: 300,
    resizeMode: "contain",
  },
  MainBackground: {
    backgroundColor: "#fff",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  MainAllLessonNumber: {
    color: "#8F95B2",
    fontWeight: "600",
  },
  MainAllLessonTitle: {
    fontSize: 15,
    fontWeight: "bold",
    paddingBottom: 5,
    backgroundColor: "#202020",
    color: "#fff",
    paddingLeft: 10,
  },
  MainAllLessonBackground: {
    marginVertical: 10,
    marginHorizontal: 5,
    width: windowWidth / 2 - 30,
    height: windowHeight / 3,
    paddingTop: 25,
    paddingLeft: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
});

export default ScreenCourses;
