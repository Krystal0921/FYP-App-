import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log("Data stored successfully:", key, value);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log("Data retrieved successfully:", key, value);
      return value;
    }
    console.log("No data found for key:", key);
    return null;
  } catch (error) {
    console.error("Error retrieving data:", error);
    return null;
  }
};

const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log("Data removed successfully:", key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

export { storeData, getData, removeData };
