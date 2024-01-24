import React from "react";
import {
  View,
  Pressable,
  StyleSheet,
  Text,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

const chatData = [
  {
    id: "1",
    name: "John Doe",
    message: "Hello, how are you?",
    time: "10:30 AM",
    avatar: require("../assets/favicon.png"),
  },
  {
    id: "2",
    name: "Jane Smith",
    message: "I am good, thanks!",
    time: "11:45 AM",
    avatar: require("../assets/favicon.png"),
  },
];

const ChooseChatScreen = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate("Other");
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={handleButtonPress}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.itemContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.SettingTitle}>Chat</Text>
        <FlatList
          data={chatData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
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
          onPress={() => navigation.navigate("userScreen", {})}
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
  MainFooter: {
    flexDirection: "row",
    height: 40,
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
  SettingTitle: {
    fontSize: 25,
    fontWeight: "bold",
    alignSelf: "center",
    justifyContent: "center",
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#fafafa",
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20,
  },
  itemContent: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  message: {
    fontSize: 14,
    color: "#888",
  },
  time: {
    fontSize: 12,
    color: "#888",
  },
});

export default ChooseChatScreen;
