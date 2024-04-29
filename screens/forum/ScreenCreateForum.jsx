import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import moment from "moment";
import { useAuth } from "../../components/AuthProvider";
import { NAVIGATION_TAB } from "../../const/navigations";

const ScreenCreateForum = ({ navigation }) => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [createAt, setCreateAt] = useState("");
  const [postImage, setPostImage] = useState("");

  useEffect(() => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
    console.log(currentDateTime);
    setCreateAt(currentDateTime);
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });
    const filename = result.uri.substring(
      result.uri.lastIndexOf("/") + 1,
      result.uri.length
    );
    setPostImage(filename);
    setImage(result.base64);
  };

  const createForum = async () => {
    try {
      const data = {
        mId: user.userId,
        title,
        content,
        postImage,
        createAt,
        image,
      };
      console.log(createAt);
      fetch("http://3.212.61.233:3000/CreatePost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then(async (responseData) => {
          if (responseData.success) {
            navigation.navigate(NAVIGATION_TAB.course);
            navigation.navigate(NAVIGATION_TAB.forum);
          } else {
            alert("Create Forum Fall");
          }
        });
    } catch (e) {
      alert("Create Forum Error");
    }
  };

  return (
    <SafeAreaView style={styles.CreateForumBackgound}>
      <View style={styles.CreateForumView}>
        <TextInput
          style={styles.CreateForumInputText}
          placeholder="Post Title"
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View style={styles.CreateForumView}>
        <TouchableOpacity style={styles.CreateForumButton} onPress={pickImage}>
          <Text style={styles.CreateForumButtonText}>Post Image (Option)</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TextInput
          multiline
          numberOfLines={6}
          style={styles.CreateForumDetailsInputText}
          placeholder="Post Details"
          onChangeText={(text) => setContent(text)}
        />
      </View>
      <Text />
      <View style={styles.CreateForumView}>
        <TouchableOpacity style={styles.CreateForumButton}>
          <Text style={styles.CreateForumButtonText} onPress={createForum}>
            Create
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  CreateForumTitle: {
    fontSize: 25,
    fontWeight: "bold",
  },
  CreateForumInputText: {
    backgroundColor: "#F5F5F7",
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    height: 60,
    width: 300,
    marginVertical: 3,
    marginBottom: 10,
  },
  CreateForumView: {
    flex: 1,
  },
  CreateForumDetailsView: {
    flex: 1,
  },
  CreateForumButton: {
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: "#264858",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  CreateForumButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  CreateForumDetailsInputText: {
    backgroundColor: "#F5F5F7",
    padding: 15,
    borderRadius: 5,
    fontSize: 16,
    height: 200,
    width: 300,
    marginVertical: 3,
    textAlignVertical: "top",
  },
  CreateForumBackgound: {
    justifyContent: "center",
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingBottom: 50,
    paddingTop: 50,
  },
});

export default ScreenCreateForum;
