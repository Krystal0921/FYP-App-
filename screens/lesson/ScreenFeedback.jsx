// import React, { useEffect, useState, useRoute, useRef } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { RadioButton } from 'react-native-paper';
// import NAVIGATION_COURSE from '../../const/navigations';

// const ScreenFeedback = ({ route, navigation }) => {
// const { onSubmit, lessonId, sectionId } = route.params;

//   const [feedback, setFeedback] = useState({
//     lessonContent1: null,
//     lessonContent2: null,
//     lessonContent3: null,
//     lessonContent4: null,
//     lessonContent5: null,
//     suggestions: ''
//   });

//   const handleRadioChange = (name, value) => {
//     setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
//   };

//   const handleSuggestionsChange = (text) => {
//     setFeedback((prevFeedback) => ({ ...prevFeedback, suggestions: text }));
//   };

//   const handleSubmit = () => {
//     const isAllAnswered = Object.values(feedback).every(
//       (value) => value !== null
//     );

//     if (!isAllAnswered) {
//       alert('Please answer all questions before submitting.');
//       return;
//     }

//     // submit feedback form(need to change))
//      onSubmit(feedback, lessonId);

//     navigation.navigate(NAVIGATION_COURSE.lessons);
//   };

//   return (
//     <View style={styles.container}>
//       <h4>Feedback</h4>

//       <Text style={styles.sectionHeader}>For the system:</Text>
//       <View style={styles.radioButtonContainer}>
//         <Text style={styles.radioButtonLabel}>The lesson sections contain enough content.</Text>
//         <RadioButton.Group value={feedback.lessonContent1} onChange={handleRadioChange.bind(null, 'lessonContent1')}>
//           <RadioButton value={1}>Totally Disagree</RadioButton>
//           <RadioButton value={2}>Disagree</RadioButton>
//           <RadioButton value={3}>Neutral</RadioButton>
//           <RadioButton value={4}>Agree</RadioButton>
//           <RadioButton value={5}>Totally Agree</RadioButton>
//         </RadioButton.Group>
//       </View>

//       <View style={styles.radioButtonContainer}>
//         <Text style={styles.radioButtonLabel}>There are an adequate number of sections.</Text>
//         <RadioButton.Group value={feedback.lessonContent2} onChange={handleRadioChange.bind(null, 'lessonContent2')}>
//           <RadioButton value={1}>Totally Disagree</RadioButton>
//           <RadioButton value={2}>Disagree</RadioButton>
//           <RadioButton value={3}>Neutral</RadioButton>
//           <RadioButton value={4}>Agree</RadioButton>
//           <RadioButton value={5}>Totally Agree</RadioButton>
//         </RadioButton.Group>
//       </View>

//       <Text style={styles.sectionHeader}>For the current section:</Text>
//       <View style={styles.radioButtonContainer}>
//         <Text style={styles.radioButtonLabel}>The learning material meets my requirement.</Text>
//         <RadioButton.Group value={feedback.lessonContent3} onChange={handleRadioChange.bind(null, 'lessonContent3')}>
//           <RadioButton value={1}>Totally Disagree</RadioButton>
//           <RadioButton value={2}>Disagree</RadioButton>
//           <RadioButton value={3}>Neutral</RadioButton>
//           <RadioButton value={4}>Agree</RadioButton>
//           <RadioButton value={5}>Totally Agree</RadioButton>
//         </RadioButton.Group>
//       </View>

//       <View style={styles.radioButtonContainer}>
//         <Text style={styles.radioButtonLabel}>There are enough supporting media resources.</Text>
//         <RadioButton.Group value={feedback.lessonContent4} onChange={handleRadioChange.bind(null, 'lessonContent4')}>
//           <RadioButton value={1}>Totally Disagree</RadioButton>
//           <RadioButton value={2}>Disagree</RadioButton>
//           <RadioButton value={3}>Neutral</RadioButton>
//           <RadioButton value={4}>Agree</RadioButton>
//           <RadioButton value={5}>Totally Agree</RadioButton>
//         </RadioButton.Group>
//       </View>

//       <View style={styles.radioButtonContainer}>
//         <Text style={styles.radioButtonLabel}>The explanation of learning material is clear.</Text>
//         <RadioButton.Group value={feedback.lessonContent5} onChange={handleRadioChange.bind(null, 'lessonContent5')}>
//           <RadioButton value={1}>Totally Disagree</RadioButton>
//           <RadioButton value={2}>Disagree</RadioButton>
//           <RadioButton value={3}>Neutral</RadioButton>
//           <RadioButton value={4}>Agree</RadioButton>
//           <RadioButton value={5}>Totally Agree</RadioButton>
//         </RadioButton.Group>
//       </View>

//       <View style={styles.suggestionsContainer}>
//         <Text style={styles.suggestionsLabel}>Please share any suggestions you have for the future development of the Sign Language Learning Community. (Optional)</Text>
//         <TextInput
//           multiline
//           numberOfLines={5}
//           style={styles.suggestionsInput}
//           onChangeText={handleSuggestionsChange}
//           value={feedback.suggestions}
//         />
//       </View>

//       <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
//         <Text style={styles.submitButtonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20
//   },
//   sectionHeader: {
//     fontSize: 18,
//     marginBottom: 10
//   },
//   radioButtonContainer: {
//     marginBottom: 15
//   },
//   radioButtonLabel: {
//     marginBottom: 5
//   },
//   suggestionsContainer: {
//     marginBottom: 20
//   },
//   suggestionsLabel: {
//     marginBottom: 10
//   },
//   suggestionsInput: {
//     height: 150,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5
//   },
//   submitButton: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     borderRadius: 5
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center'
//   }
// });

// export default ScreenFeedback;
import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/core";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from "../../const/navigations";

const ScreenFeedback = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const getUserId = async () => {
      try {
        const userId = await AsyncStorage.getItem("userId");
        setUserId(userId);
      } catch (error) {
        console.error("Error retrieving userId from AsyncStorage:", error);
      }
    };
    getUserId();
  }, []);

  const route = useRoute();
  const { sectionId, lessonId } = route.params;

  const [feedback, setFeedback] = useState({
    q1: null,
    q2: null,
    q3: null,
    q4: null,
    q5: null,
    q6: "",
  });

  const handleRadioChange = (name, value) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  const handleSuggestionsChange = (text) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, q6: text }));
  };

  const handleSubmit = async () => {
    const isAllAnswered = Object.values(feedback)
      .slice(0, 5)
      .every((value) => value !== null);

    if (!isAllAnswered) {
      alert("Please answer Q1 to Q5 before submitting.");
      return;
    }

    try {
      const mId = userId;

      const response1 = await fetch(
        "http://44.221.91.193:3000/UpdateLessonProgress",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ mId, lessonId, sectionId }),
        }
      );

      if (!response1.ok) {
        throw new Error("Failed to update member progress data");
      }

      const data = {
        lessonId,
        sectionId,
        q1: feedback.q1,
        q2: feedback.q2,
        q3: feedback.q3,
        q4: feedback.q4,
        q5: feedback.q5,
        q6: feedback.q6,
      };
      const response2 = await fetch("http://44.221.91.193:3000/Feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response2.ok) {
        throw new Error("Failed to get feedback data");
      } else {
        console.log(
          lessonId +
            sectionId +
            feedback.q1 +
            feedback.q2 +
            feedback.q3 +
            feedback.q4 +
            feedback.q5 +
            feedback.q6
        );
        alert("Thank You For Your Feedback!");
      }

      if (lessonId === "L01") {
        navigation.navigate(NAVIGATION_MAIN.lesson, {
          screen: NAVIGATION_COURSE.lessons,
          params: { lessonId: lessonId, name: "Daily Communication" },
        });
      } else if (lessonId === "L02") {
        navigation.navigate(NAVIGATION_MAIN.lesson, {
          screen: NAVIGATION_COURSE.lessons,
          params: { lessonId: lessonId, name: "Travel Communication" },
        });
      } else if (lessonId === "L03") {
        navigation.navigate(NAVIGATION_MAIN.lesson, {
          screen: NAVIGATION_COURSE.lessons,
          params: { lessonId: lessonId, name: "Workplace Communication" },
        });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      alert(error.message);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Feedback</Text>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>For the system:</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            The lesson sections contain enough content.
          </Text>
          <View style={styles.radioButtonRow}>
            {[
              "Totally Disagree",
              "Disagree",
              "Neutral",
              "Agree",
              "Totally Agree",
            ].map((label, index) => (
              <View key={label} style={styles.radioButtonLabelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <RadioButton
                  value={index + 1}
                  status={feedback.q1 === index + 1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioChange("q1", index + 1)}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            There are an adequate number of sections.
          </Text>
          <View style={styles.radioButtonRow}>
            {[
              "Totally Disagree",
              "Disagree",
              "Neutral",
              "Agree",
              "Totally Agree",
            ].map((label, index) => (
              <View key={label} style={styles.radioButtonLabelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <RadioButton
                  value={index + 1}
                  status={feedback.q2 === index + 1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioChange("q2", index + 1)}
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>For the current section:</Text>
        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            The learning material meets my requirement.
          </Text>
          <View style={styles.radioButtonRow}>
            {[
              "Totally Disagree",
              "Disagree",
              "Neutral",
              "Agree",
              "Totally Agree",
            ].map((label, index) => (
              <View key={label} style={styles.radioButtonLabelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <RadioButton
                  value={index + 1}
                  status={feedback.q3 === index + 1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioChange("q3", index + 1)}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            There are enough supporting media resources.
          </Text>
          <View style={styles.radioButtonRow}>
            {[
              "Totally Disagree",
              "Disagree",
              "Neutral",
              "Agree",
              "Totally Agree",
            ].map((label, index) => (
              <View key={label} style={styles.radioButtonLabelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <RadioButton
                  value={index + 1}
                  status={feedback.q4 === index + 1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioChange("q4", index + 1)}
                />
              </View>
            ))}
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>
            The explanation of learning material is clear.
          </Text>
          <View style={styles.radioButtonRow}>
            {[
              "Totally Disagree",
              "Disagree",
              "Neutral",
              "Agree",
              "Totally Agree",
            ].map((label, index) => (
              <View key={label} style={styles.radioButtonLabelContainer}>
                <Text style={styles.radioButtonLabel}>{label}</Text>
                <RadioButton
                  value={index + 1} // values 1 to 5
                  status={feedback.q5 === index + 1 ? "checked" : "unchecked"}
                  onPress={() => handleRadioChange("q5", index + 1)}
                />
              </View>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Additional Comments:</Text>
        <TextInput
          multiline
          style={styles.suggestionsInput}
          onChangeText={handleSuggestionsChange}
          value={feedback.q6}
          placeholder="(Optional) Please share any suggestions you have for the future development of the Sign Language Learning Community."
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: "center",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  section: {
    marginBottom: 8,
  },
  sectionHeader: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  questionContainer: {
    marginBottom: 15,
  },
  questionText: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
  },
  radioButtonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  radioButtonLabelContainer: {
    alignItems: "center",
  },
  radioButtonLabel: {
    marginBottom: 5,
    fontSize: 14,
    textAlign: "center",
  },
  suggestionsInput: {
    height: 150,
    padding: 10,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default ScreenFeedback;
