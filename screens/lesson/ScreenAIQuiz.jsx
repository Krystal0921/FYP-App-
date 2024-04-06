import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from "../../const/navigations";

const ScreenAIQuiz = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState(null);
  let isCorrect;
  const questions = [
    ["What is 'A' in sign language?", "A"],
    ["What is 'B' in sign language?", "B"],
    ["What is 'C' in sign language?", "C"],
    ["What is 'D' in sign language?", "D"],
    ["What is 'E' in sign language?", "E"],
    ["What is '7' in sign language?", "7"],
    ["What is '8' in sign language?", "8"],
    ["What is '9' in sign language?", "9"],
    ["What is '10' in sign language?", "10"],
  ];

  const randomQuestion =
    questions[Math.floor(Math.random() * questions.length)];
  const question = randomQuestion[0];
  const answer = randomQuestion[1];

  const handleFileUpload = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    const imagePickerResult = await ImagePicker.launchImageLibraryAsync();

    if (!imagePickerResult.cancelled) {
      setSelectedImage(imagePickerResult.uri);
      convertToBase64(imagePickerResult.uri);
    }
  };

  const convertToBase64 = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const base64 = await convertBlobToBase64(blob);
      setBase64Image(base64);
    } catch (error) {
      console.log("Error converting image to base64:", error);
    }
  };

  const convertBlobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const handleUploadButtonPress = () => {
    if (base64Image) {
      uploadImageToAIQuiz(base64Image);
    } else {
      alert("No image selected");
    }
  };

  const uploadImageToAIQuiz = async (base64Image) => {
    try {
      const response = await fetch("http://44.221.91.193:3001/AIQuiz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image_data: base64Image }),
      });

      const data = await response.json();
      console.log("Prediction:", data.prediction);
      setPredictedLabel(data.prediction);
      let isCorrect;

      if (predictedLabel === answer) {
        isCorrect = true;
      } else {
        isCorrect = false;
      }
      console.log("Is Correct:", isCorrect);
    } catch (error) {
      console.log("Error uploading image to AIQuiz API:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.title}>Question:</Text>
        <Text style={styles.questionText}> {question}</Text>
      </View>
      <TouchableOpacity style={styles.uploadButton} onPress={handleFileUpload}>
        <Text style={styles.buttonText}>Upload Your Answer</Text>
      </TouchableOpacity>
      <View style={styles.resultContainer}>
        {selectedImage && (
          <View>
            <Image
              source={{ uri: selectedImage }}
              style={styles.uploadedImage}
            />
            <View
              style={[
                styles.rectangle,
                { backgroundColor: isCorrect ? "green" : "red" },
              ]}
            >
              <Text style={styles.rectangleText}>
                {isCorrect ? "CORRECT" : "INCORRECT"}
              </Text>
            </View>
          </View>
        )}

        <TouchableOpacity
          style={styles.uploadButton}
          onPress={handleUploadButtonPress}
        >
          <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: "#8B0960",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  resultContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  uploadedImage: {
    width: 300,
    height: 300,
    borderRadius: 5,
  },
  rectangle: {
    height: 50,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  rectangleText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ScreenAIQuiz;
