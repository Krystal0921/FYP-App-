import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';

const detail = [
  {
    id: '1',
    jobTitle: 'Full-time Library Materials Organizer',
    companyName: 'Adecco Personnel Limited',
    location: 'Public Libraries in Hong Kong, Kowloon and the New Territories',
    description: 'Full-time, LCSD Outsourcing Contracts',
    highlight: [
      '17 days of public holidays',
      'On-the-job training and good promotion prospects'
    ],
    responsibilities: [
      'Responsible for organizing all kinds of library materials, including classification, sorting and shelving, cleaning and disinfecting books, and transportation and other manual work'
    ],
    requirements: [
      'Work 6 days per week, 8 hours per day',
      '5 days off per month',
      'Secondary 3 or equivalent in Hong Kong'
    ],
    time: '2023-01-31 23:59:59',
    companyImage: require('../../assets/adecco.png')
  }
];

const ScreenJobsDetails = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  const formattedDate = detail[0].time.split(' ')[0];

  const handleUploadFile = () => {

  };

  const handleSendEmail = () => {
    if (uploadedFile) {
      // Implement logic to send the email with the uploaded file
      // You can use a library like react-native-mail to send emails
      console.log('Sending email with file:', uploadedFile);
    }
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={detail[0].companyImage}
        />
        <Text style={styles.title}>{detail[0].jobTitle}</Text>
        <Text style={styles.subtitle}>{detail[0].companyName}</Text>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionText}>{detail[0].location}</Text>
        <Text style={styles.sectionTitle}>Job Highlight : </Text>

        {detail[0].highlight.map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Description : </Text>

        <Text style={styles.text}>{detail[0].description}</Text>
        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Responsibilities : </Text>

        {detail[0].responsibilities.map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Requirements : </Text>

        {detail[0].requirements.map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
        <View style={styles.hrLine} />
        <Text style={styles.sectionText}>Post Date: {formattedDate}</Text>

        <Text />

        <TouchableOpacity style={styles.applyButton} onPress={toggleModal}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>

        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Upload CV</Text>
              <Button title="Choose File" onPress={handleUploadFile} />
              {uploadedFile && <Text>File Uploaded: {uploadedFile}</Text>}
              <Button title="Send " onPress={handleSendEmail} disabled={!uploadedFile} />
              <Button title="Cancel" onPress={toggleModal} />
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 20,
    paddingTop: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginBottom: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 4
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    width: '80%'
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  applyButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    alignSelf: 'center'
  },
  applyButtonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'

  },
  hrLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 16
  },
  text: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 5,
    fontSize: 16
  },
  bulletPoint: {
    marginRight: 5
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
    marginRight: 20,
    padding: 70
  }
});

export default ScreenJobsDetails;
