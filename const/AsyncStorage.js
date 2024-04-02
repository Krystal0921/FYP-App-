import AsyncStorage from "@react-native-async-storage/async-storage";

const storeUserData = async (userId, username) => {
  try {
    // Store user ID and username as an object
    const userData = { userId, username };
    await AsyncStorage.setItem("userData", JSON.stringify(userData));
    console.log("User data stored successfully:", userData);
  } catch (error) {
    console.error("Error storing user data:", error);
  }
};

const getUserData = async () => {
  try {
    const userDataItem = await AsyncStorage.getItem("userData");
    if (userDataItem !== null) {
      // Parse the stored user data
      const userData = JSON.parse(userDataItem);
      console.log("User data retrieved successfully:", userData);
      return userData;
    }
    console.log("No user data found.");
    return null;
  } catch (error) {
    console.error("Error retrieving user data:", error);
    return null;
  }
};

const removeUserData = async () => {
  try {
    await AsyncStorage.removeItem("userData");
    console.log("User data removed successfully.");
  } catch (error) {
    console.error("Error removing user data:", error);
  }
};

export { storeUserData, getUserData, removeUserData };
