import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { NAVIGATION_TAB, NAVIGATION_MAIN, NAVIGATION_COURSE } from '../../const/navigations';
import { useAuth } from '../../components/AuthProvider';

const ScreenUser = ({ navigation }) => {
  const [isAnimated, setIsAnimated] = useState(false);
  const { onLogout } = useAuth();
  const { user } = useAuth();
  const [userId] = useState("");
  const [userInformation, setUserInformation] = useState([]);
  const [userProgressInformation, setUserProgressInformation] = useState([]);

  const lessonNames = {
    L01: "Daily Communication",
    L02: "Travel Communication",
    L03: "Workplace Communication",
  };

  console.log(user);
  useEffect(() => {
    const fetchUserInformation = async () => {
      try {
        const fetchUserData = async () => {
          const data = {
            mId: user.userId,
          };
          const response = await fetch(
            "http://44.221.91.193:3000/MemberDetail/",
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
            setUserInformation(responseData.data[0]);
          } else {
            alert(responseData.msg || "Failed to fetch user data");
          }
        };

        const fetchOtherUserData = async () => {
          const data = {
            mId: user.userId,
          };
          const response = await fetch(
            "http://44.221.91.193:3000/MemberLessonProgress",
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
            setUserProgressInformation(responseData.data);
          } else {
            alert(responseData.msg || "Failed to fetch user progress data");
          }
        };

        await Promise.all([fetchUserData(), fetchOtherUserData()]);
      } catch (error) {
        alert("User Information Error");
      }
    };
    fetchUserInformation();
  }, [userId]);

  const handleAnimate = (lessonId) => {
    setIsAnimated(true);
    navigation.navigate(NAVIGATION_MAIN.lesson, {
      screen: NAVIGATION_COURSE.lessons,
      params: { lessonId, name: lessonNames[lessonId] }
    });
  };

  const imageMapping = {
    'default-profile-picture.jpg': require('../../assets/default-profile-picture.jpg')
  };

  const getImageSource = (imageFilename) => imageMapping[imageFilename];

  return (
    <View style={styles.container}>
      <View style={styles.vertical}>
        <Image
          style={styles.logo}
          source={getImageSource(userInformation.mPhoto)}
        />
        <View style={styles.vertical}>
          <Text style={styles.text}>Name : {userInformation.mName}</Text>
          <Text style={styles.text}>E-mail : {userInformation.mEmail}</Text>
        </View>
      </View>
      <View style={styles.hrLine} />
      <Text style={styles.progressTitle}>Progress</Text>
      <View style={styles.horizontally}>
        <TouchableOpacity onPress={() => handleAnimate("L01")}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={userProgressInformation[0]?.totalMark}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: "red", value: 0 },
                { color: "skyblue", value: 50 },
                { color: "yellowgreen", value: 100 },
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Daily</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnimate("L02")}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={userProgressInformation[1]?.totalMark}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: "red", value: 0 },
                { color: "skyblue", value: 50 },
                { color: "yellowgreen", value: 100 },
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Travel</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleAnimate("L03")}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={userProgressInformation[2]?.totalMark}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: "red", value: 0 },
                { color: "skyblue", value: 50 },
                { color: "yellowgreen", value: 100 },
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Workplace</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.logout} onPress={() => onLogout()}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hrLine: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 16,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 60,
  },
  MainFooter: {
    flexDirection: "row",
    height: 80,
    backgroundColor: "#55098b",
    justifyContent: "space-around",
    alignItems: "center",
  },
  horizontally: {
    flexDirection: "row",
    alignSelf: "center",
  },
  vertical: {
    flexDirection: "column",
    alignSelf: "center",
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 16,
    alignSelf: "center",
  },
  progressContainer: {
    alignItems: "center",
    marginTop: 30,
    paddingHorizontal: 10,
    marginVertical: 16,
  },
  progressTitle: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
    fontSize: 20,
    textAlign: "center",
  },
  logout: {
    alignSelf: "center",
    backgroundColor: "#3B6DAF",
    width: 300,
    height: 50,
    borderRadius: 10,
  },
  logoutText: {
    padding: 5,
    alignSelf: "center",
    color: "#FFFFFF",
    fontSize: 25,
  },
});

export default ScreenUser;
