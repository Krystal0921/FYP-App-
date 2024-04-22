import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from '../../const/navigations';

const ScreenAIQuiz = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);
  const [predictedLabel, setPredictedLabel] = useState(null);
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);

  const [isCorrect, setIsCorrect] = useState(null);

  const questions = [
    ["What is 'A' in sign language?", 'A'],
    ["What is 'B' in sign language?", 'B'],
    ["What is 'C' in sign language?", 'C'],
    ["What is 'D' in sign language?", 'D'],
    ["What is 'E' in sign language?", 'E'],
    ["What is '7' in sign language?", '7'],
    ["What is '8' in sign language?", '8'],
    ["What is '9' in sign language?", '9'],
    ["What is '10' in sign language?", '10']
  ];
  useEffect(() => {
    const randomQuestions = questions[Math.floor(Math.random() * questions.length)];
    const question = randomQuestions[0];
    const answers = randomQuestions[1];

    setRandomQuestion(question);
    setAnswer(answers);
  }, []);

  const handleFileUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      alert('Permission to access the camera roll is required!');
      return;
    }

    const imagePickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1 // Set the initial quality to 1
    });

    if (!imagePickerResult.canceled) {
      const { uri } = imagePickerResult;

      // Compress or resize the image
      const compressedImage = await ImageManipulator.manipulateAsync(
        uri,
        [{ resize: { width: 415, height: 415 } }],
        {
          compress: 1,
          format: ImageManipulator.SaveFormat.PNG
        }
      );

      console.log('Compressed Image URI: ', compressedImage.uri);
      console.log('Compressed Image Size: ', compressedImage.size);

      // Read the compressed image file as a Blob
      const response = await fetch(compressedImage.uri);
      const blob = await response.blob();

      // Convert the Blob to Base64
      const base64String = await blobToBase64(blob);

      setSelectedImage(base64String);
      // setSelectedImage(compressedImage.uri);
      convertToBase64(base64String);
    }
  };
  const blobToBase64 = async (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  const convertToBase64 = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();
      const base64 = await convertBlobToBase64(blob);
      setBase64Image(base64);
    } catch (error) {
      console.log('Error converting image to base64:', error);
    }
  };

  const convertBlobToBase64 = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });

  const handleUploadButtonPress = () => {
    if (base64Image) {
      const base64WithoutPrefix = base64Image.substring(
        'data:image/png;base64,'.length
      );
      console.log('Base64 String:', base64WithoutPrefix);
      uploadImageToAIQuiz(base64WithoutPrefix);
    } else {
      alert('No image selected');
    }
  };

  const uploadImageToAIQuiz = async (base64Image) => {
    try {
      const response = await fetch('http://44.221.91.193:3000/AIQuiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image_data: base64Image })
      });

      const data = await response.json();
      console.log('Prediction:', data);
      prediction = data.prediction;
      console.log(`${prediction}= ${answer}`);
      if (prediction === answer) {
        setIsCorrect(true);
      } else {
        setIsCorrect(false);
      }
      console.log(isCorrect);
    } catch (error) {
      console.log('Error uploading image to AIQuiz API:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.questionContainer}>
        <Text style={styles.questionText}> {randomQuestion}</Text>
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
                {
                  backgroundColor:
                    isCorrect === null ? 'transparent' : isCorrect ? 'green' : 'red'
                }
              ]}
            >
              <Text style={styles.rectangleText}>
                {isCorrect === null ? '' : isCorrect ? 'CORRECT' : 'INCORRECT'}
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    justifyContent: 'center',
    fontWeight: 'bold',
    marginBottom: 20
  },
  questionContainer: {
    marginBottom: 20
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  uploadButton: {
    backgroundColor: '#8B0960',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center'
  },
  uploadedImage: {
    width: 300,
    height: 300,
    borderRadius: 5
  },
  rectangle: {
    height: 50,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rectangleText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ScreenAIQuiz;
