import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const authContext = createContext();

export const useAuth = () => useContext(authContext);
export const AuthProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useState({ userId: null });
  const [loading, setLoading] = useState(true);
  const onLogin = async (user) => {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  const onLogout = async (userData) => {
    try {
      // await AsyncStorage.setItem('user', JSON.stringify(userData));
      // setUser(userData);
      await AsyncStorage.multiRemove(["user", "userId"]);
      setUser(null);
    } catch (error) {
      console.error("Error storing user data:", error);
    }
  };

  const publisUserQuizMark = async (mark, lessonId) => {
    try {
      const storedMarkData = await AsyncStorage.getItem("markData");
      const markData = storedMarkData ? JSON.parse(storedMarkData) : {};

      // Check if the mark data for the given lessonId already exists
      if (markData.hasOwnProperty(lessonId)) {
        const existingMark = parseInt(markData[lessonId].mark);
        const newMark = parseInt(mark);

        if (newMark > existingMark) {
          markData[lessonId].mark = mark.toString();
          console.log(
            `New mark ${mark} is higher than the existing mark for lessonId ${lessonId}. Updating the mark.`
          );
        } else {
          console.log(
            `New mark ${mark} is not higher than the existing mark for lessonId ${lessonId}. Keeping the existing mark.`
          );
        }
      } else {
        markData[lessonId] = {
          lessonId: lessonId.toString(),
          mark: "0",
        };
        console.log(`Adding new mark ${mark} for lessonId ${lessonId}.`);
      }

      await AsyncStorage.setItem("markData", JSON.stringify(markData));
    } catch (error) {
      console.error("Error storing public user quiz mark data:", error);
    }
  };

  useEffect(() => {
    // update user when app is loaded
    AsyncStorage.getItem("user")
      .then((user) => {
        setUser(user ? JSON.parse(user) : null);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <authContext.Provider
      value={{ user, onLogin, onLogout, publisUserQuizMark }}
    >
      {loading ? null : children}
    </authContext.Provider>
  );
};

export default AuthProvider;
