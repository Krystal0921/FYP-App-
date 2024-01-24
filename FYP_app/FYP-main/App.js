import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Image, Text, Pressable, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import MainScreen from "./view_screens/MainScreen";
import SettingScreen from "./view_screens/SettingScreen";
import LessonSectionScreen from "./view_screens/LessonSectionScreen";
import QuizScreen from "./view_screens/QuizScreen";
import AllForumScreen from "./view_screens/AllForumScreen";
import ForumScreen from "./view_screens/ForumScreen";
import LoginScreen from "./view_screens/LoginScreen";
import SignUpTypeScreen from "./view_screens/SignUpTypeScreen";
import MemberSignUpScreen from "./view_screens/MemberSignUpScreen";
import EmploymentSignUpScreen from "./view_screens/EmploymentSignUpScreen";
import CreateForumScreen from "./view_screens/CreateForumScreen";
import EditForumScreen from "./view_screens/EditForumScreen";
import ChooseChatScreen from "./view_screens/ChooseChatScreen";
import ChatScreen from "./view_screens/ChatScreen";
import UserScreen from "./view_screens/UserScreen";
import JobList from "./view_screens/JobList";

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ title: null, headerStyle: { elevation: 0 } }}
        >
          <Stack.Screen
            name="MainScreen"
            component={MainScreen}
            options={({ navigation }) => ({
              headerLeft: () => (
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  {" "}
                  Welcome User
                </Text>
              ),
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate("SettingScreen", {})}
                  style={({ pressed }) => {
                    return { opacity: pressed ? 0 : 1 };
                  }}
                >
                  <Image
                    style={{ height: 30, width: 30, marginRight: 20 }}
                    source={require("./assets/setting-icon.png")}
                  />
                </Pressable>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="SettingScreen"
            component={SettingScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("MainScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="LessonSectionScreen"
            component={LessonSectionScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("MainScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="AllForumScreen"
            component={AllForumScreen}
          ></Stack.Screen>

          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
          ></Stack.Screen>

          <Stack.Screen
            name="SignUpTypeScreen"
            component={SignUpTypeScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("LoginScreen", {})}
                ></TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="EmploymentSignUpScreen"
            component={EmploymentSignUpScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("SignUpTypeScreen", {})}
                ></TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="MemberSignUpScreen"
            component={MemberSignUpScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("SignUpTypeScreen", {})}
                ></TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("LessonSectionScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="ForumScreen"
            component={ForumScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("AllForumScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="CreateForumScreen"
            component={CreateForumScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("AllForumScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="EditForumScreen"
            component={EditForumScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("AllForumScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>

          <Stack.Screen
            name="ChooseChatScreen"
            component={ChooseChatScreen}
            // options={({ navigation }) => ({
            //   headerTransparent: true,
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.8}
            //       onPress={() => navigation.goBack()}
            //     ></TouchableOpacity>
            //   ),
            // })}
          ></Stack.Screen>
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={({ navigation }) => ({
              headerTransparent: true,
              headerLeft: () => (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("ChooseChatScreen", {})}
                >
                  <Icon
                    name="arrow-back-ios"
                    size={25}
                    style={{ marginLeft: 20 }}
                  />
                </TouchableOpacity>
              ),
            })}
          ></Stack.Screen>
          <Stack.Screen
            name="JobList"
            component={JobList}
            // options={({ navigation }) => ({
            //   headerTransparent: true,
            //   headerLeft: () => (
            //     <TouchableOpacity
            //       activeOpacity={0.8}
            //       onPress={() => navigation.goBack()}
            //     >
            //       <Icon
            //         name="arrow-back-ios"
            //         size={25}
            //         style={{ marginLeft: 20 }}
            //       />
            //     </TouchableOpacity>
            //   ),
            // })}
          ></Stack.Screen>
          <Stack.Screen name="UserScreen" component={UserScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View style={styles.MainFooter}>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            onPress={() => navigation.navigate("SettingScreen", {})}
            source={require("./assets/forum-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("./assets/chat-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("./assets/home-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("./assets/employment-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
        <Pressable
          style={({ pressed }) => {
            return { opacity: pressed ? 0.5 : 1 };
          }}
        >
          <Image
            source={require("./assets/user-icon.png")}
            style={styles.MainIcon}
          />
        </Pressable>
      </View> */}
    </>
  );
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
