import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ScreenCourses from "./screens/lesson/ScreenCourses";
import SettingScreen from "./screens/SettingScreen";
import ScreenLesson from "./screens/lesson/ScreenLesson";
import QuizScreen from "./screens/QuizScreen";
import AllForumScreen from "./screens/AllForumScreen";
import ForumScreen from "./screens/ForumScreen";
import ScreenLogin from "./screens/login/ScreenLogin";
import ScreenSignup from "./screens/login/ScreenSignup";
import MemberSignUpScreen from "./screens/MemberSignUpScreen";
import EmploymentSignUpScreen from "./screens/EmploymentSignUpScreen";
import CreateForumScreen from "./screens/CreateForumScreen";
import EditForumScreen from "./screens/EditForumScreen";
import ChooseChatScreen from "./screens/ChooseChatScreen";
import ChatScreen from "./screens/ChatScreen";
import UserScreen from "./screens/UserScreen";
import JobList from "./screens/JobList";
import NavigatorApp from "./navigators/NavigatorApp";

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigatorApp />
  )
};

const styles = StyleSheet.create({
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

export default App;
