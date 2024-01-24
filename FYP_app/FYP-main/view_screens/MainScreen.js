import React from "react";
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
  Pressable,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import courses from "../const/courses";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const MainScreen = ({ navigation }) => {
  const CourseCard = ({ course }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("LessonSectionScreen", { data: course })
        }
      >
        <ImageBackground
          source={course.image}
          style={styles.MainAllLessonBackground}
        >
          <Text
            multiline={true}
            numberOfLines={2}
            style={styles.MainAllLessonTitle}
          >
            {course.name}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <SafeAreaView style={styles.MainBackground}>
        <View style={styles.MainTitleImageView}>
          <Image
            style={styles.MainTitleImage}
            source={require("../assets/backgroundd.png")}
          />
        </View>
        <View>
          <View style={styles.MainSearchView}>
            <Icon size={30} name="search" />
            <TextInput
              style={styles.MainSearchText}
              placeholder="Search for anything"
            />
          </View>
          <View style={styles.MainAllLessonTextView}>
            <Text style={styles.MainAllLessonText}>All Lesson</Text>
          </View>
        </View>
        <View style={styles.MainAllLessonList}>
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={courses}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <CourseCard course={item} />}
          />
        </View>
      </SafeAreaView>
      <View style={styles.MainFooter}>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
          onPress={() => navigation.navigate("AllForumScreen", {})}
        >
          <Image
            source={require("../assets/forum-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
          onPress={() => navigation.navigate("ChooseChatScreen", {})}
        >
          <Image
            source={require("../assets/chat-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
          onPress={() => navigation.navigate("MainScreen", {})}
        >
          <Image
            source={require("../assets/home-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
          onPress={() => navigation.navigate("JobList", {})}
        >
          <Image
            source={require("../assets/employment-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
          onPress={() => navigation.navigate("UserScreen", {})}
        >
          <Image
            source={require("../assets/user-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
      </View>
    </>
  );
};

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
    color: "#fff",
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
    ustifyContent: "center",
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
    borderRadius: 50,
    width: windowWidth / 2 - 30,
    height: windowHeight / 3,
    paddingTop: 25,
    paddingLeft: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  MainFooter: {
    flexDirection: "row",
    height: 80,
    paddingTop: 10,
    backgroundColor: "#55098b",
    justifyContent: "space-around",
    alignItems: "center",
  },
  MainIcon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginBottom: 5,
  },
});

export default MainScreen;
