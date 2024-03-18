import React, { useEffect, useState, useRoute, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import NAVIGATION_COURSE from '../../const/navigations';

const ScreenFeedback = ({ route, navigation }) => {
  const { onSubmit, lessonId, sectionId } = route.params;

  const [feedback, setFeedback] = useState({
    lessonContent1: null,
    lessonContent2: null,
    lessonContent3: null,
    lessonContent4: null,
    lessonContent5: null,
    suggestions: ''
  });

  const handleRadioChange = (name, value) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, [name]: value }));
  };

  const handleSuggestionsChange = (text) => {
    setFeedback((prevFeedback) => ({ ...prevFeedback, suggestions: text }));
  };

  const handleSubmit = () => {
    const isAllAnswered = Object.values(feedback).every(
      (value) => value !== null
    );

    if (!isAllAnswered) {
      alert('Please answer all questions before submitting.');
      return;
    }

    // submit feedback form(need to change))
    onSubmit(feedback, lessonId);

    navigation.navigate(NAVIGATION_COURSE.lessons);
  };

  return (
    <View style={styles.container}>
      <h4>Feedback</h4>

      <Text style={styles.sectionHeader}>For the system:</Text>
      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonLabel}>The lesson sections contain enough content.</Text>
        <RadioButton.Group value={feedback.lessonContent1} onChange={handleRadioChange.bind(null, 'lessonContent1')}>
          <RadioButton value={1}>Totally Disagree</RadioButton>
          <RadioButton value={2}>Disagree</RadioButton>
          <RadioButton value={3}>Neutral</RadioButton>
          <RadioButton value={4}>Agree</RadioButton>
          <RadioButton value={5}>Totally Agree</RadioButton>
        </RadioButton.Group>
      </View>

      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonLabel}>There are an adequate number of sections.</Text>
        <RadioButton.Group value={feedback.lessonContent2} onChange={handleRadioChange.bind(null, 'lessonContent2')}>
          <RadioButton value={1}>Totally Disagree</RadioButton>
          <RadioButton value={2}>Disagree</RadioButton>
          <RadioButton value={3}>Neutral</RadioButton>
          <RadioButton value={4}>Agree</RadioButton>
          <RadioButton value={5}>Totally Agree</RadioButton>
        </RadioButton.Group>
      </View>

      <Text style={styles.sectionHeader}>For the current section:</Text>
      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonLabel}>The learning material meets my requirement.</Text>
        <RadioButton.Group value={feedback.lessonContent3} onChange={handleRadioChange.bind(null, 'lessonContent3')}>
          <RadioButton value={1}>Totally Disagree</RadioButton>
          <RadioButton value={2}>Disagree</RadioButton>
          <RadioButton value={3}>Neutral</RadioButton>
          <RadioButton value={4}>Agree</RadioButton>
          <RadioButton value={5}>Totally Agree</RadioButton>
        </RadioButton.Group>
      </View>

      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonLabel}>There are enough supporting media resources.</Text>
        <RadioButton.Group value={feedback.lessonContent4} onChange={handleRadioChange.bind(null, 'lessonContent4')}>
          <RadioButton value={1}>Totally Disagree</RadioButton>
          <RadioButton value={2}>Disagree</RadioButton>
          <RadioButton value={3}>Neutral</RadioButton>
          <RadioButton value={4}>Agree</RadioButton>
          <RadioButton value={5}>Totally Agree</RadioButton>
        </RadioButton.Group>
      </View>

      <View style={styles.radioButtonContainer}>
        <Text style={styles.radioButtonLabel}>The explanation of learning material is clear.</Text>
        <RadioButton.Group value={feedback.lessonContent5} onChange={handleRadioChange.bind(null, 'lessonContent5')}>
          <RadioButton value={1}>Totally Disagree</RadioButton>
          <RadioButton value={2}>Disagree</RadioButton>
          <RadioButton value={3}>Neutral</RadioButton>
          <RadioButton value={4}>Agree</RadioButton>
          <RadioButton value={5}>Totally Agree</RadioButton>
        </RadioButton.Group>
      </View>

      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsLabel}>Please share any suggestions you have for the future development of the Sign Language Learning Community. (Optional)</Text>
        <TextInput
          multiline
          numberOfLines={5}
          style={styles.suggestionsInput}
          onChangeText={handleSuggestionsChange}
          value={feedback.suggestions}
        />
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  sectionHeader: {
    fontSize: 18,
    marginBottom: 10
  },
  radioButtonContainer: {
    marginBottom: 15
  },
  radioButtonLabel: {
    marginBottom: 5
  },
  suggestionsContainer: {
    marginBottom: 20
  },
  suggestionsLabel: {
    marginBottom: 10
  },
  suggestionsInput: {
    height: 150,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5
  },
  submitButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  }
});

export default ScreenFeedback;
