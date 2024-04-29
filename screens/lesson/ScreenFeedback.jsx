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
import { useAuth } from "../../components/AuthProvider";

const ScreenFeedback = () => {
  const navigation = useNavigation();
  const [userId, setUserId] = useState(null);
  const { user } = useAuth();

  const lessonNames = {
    L01: "Daily Communication",
    L02: "Travel Communication",
    L03: "Workplace Communication",
  };

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
      if (!user) {
        console.log("public user");
      } else {
        const mId = user.userId;

        const response1 = await fetch(
          "http://3.212.61.233:3000/UpdateLessonProgress",
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
      const response2 = await fetch("http://3.212.61.233:3000/Feedback", {
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

      if (lessonId in lessonNames) {
        navigation.navigate(NAVIGATION_MAIN.lesson, {
          screen: NAVIGATION_COURSE.lessons,
          params: { lessonId, name: lessonNames[lessonId] },
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
