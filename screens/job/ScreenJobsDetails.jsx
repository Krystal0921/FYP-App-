import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Modal, ScrollView, TouchableOpacity, Image } from 'react-native';

const ScreenJobsDetails = ({ route }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [jobsDetails, setJobsDetails] = useState([]);
  const { jId, eId, image, cName } = route.params;

  const formattedTime = new Date(jobsDetails.createAt).toLocaleString();

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

  useEffect(() => {
    const fetchJobsDetails = async () => {
      try {
        const fetchUserData = async () => {
          const data = {
            jId
          };
          const response = await fetch(
            'http://44.221.91.193:3000/JobDetail',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            }
          );
          const responseData = await response.json();
          if (responseData.success) {
            setJobsDetails(responseData.data[0]);
          } else {
            alert(responseData.msg || 'Failed to fetch section data');
          }
        };
        await Promise.all([fetchUserData()]);
      } catch (error) {
        alert('Jobs Details Error 1');
      }
    };
    fetchJobsDetails();
  }, [jId, eId, image, cName]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: `data:image/jpeg;base64,${image}` }}
        />
        <Text style={styles.title}>{jobsDetails.jobTitle}</Text>
        <Text style={styles.subtitle}>{cName}</Text>
        <Text style={styles.sectionTitle}>Location</Text>
        <Text style={styles.sectionText}>{jobsDetails.location}</Text>

        <Text style={styles.sectionTitle}>Job Highlight : </Text>
        {jobsDetails.highlights && jobsDetails.highlights.split(', ').map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}

        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Description : </Text>
        <Text style={styles.text}>{jobsDetails.description}</Text>

        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Responsibilities : </Text>
        {jobsDetails.responsibilities && jobsDetails.responsibilities.split(', ').map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}

        <View style={styles.hrLine} />
        <Text style={styles.sectionTitle}>Requirements : </Text>
        {jobsDetails.requirements && jobsDetails.requirements.split(', ').map((item, index) => (
          <View style={styles.text} key={index}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}

        <View style={styles.hrLine} />
        <Text style={styles.sectionText}>Post Date: {formattedTime}</Text>
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
    color: '#777'
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
