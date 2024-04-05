import React, { useEffect, useState } from 'react';
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

const ScreenJobsDetails = ({ route }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [jobsDetails, setJobsDetails] = useState([]);
  const [jobsDetails2, setJobsDetails2] = useState('');
  const { jId } = route.params;

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

  useEffect(() => {
    const fetchJobsDetails = async () => {
      try {
        const fetchUserData = async () => {
          // alert(jId);
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
          // alert(responseData.data[0].jobTitle);
            setJobsDetails(responseData.data[0]);
          } else {
            alert(responseData.msg || 'Failed to fetch section data');
          }
        };

        const fetchUserData2 = async () => {
          const response = await fetch(
            'http://44.221.91.193:3000/JobList',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              }
            }
          );
          const responseData = await response.json();
          setJobsDetails2(responseData.data[0]);
        };

        await Promise.all([fetchUserData(), fetchUserData2()]);
      } catch (error) {
        alert('Jobs Details Error 1');
      }
    };
    fetchJobsDetails();
  }, [jId]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={{ uri: `data:image/jpeg;base64,${jobsDetails2.image}` }}
        />
        <Text style={styles.title}>{jobsDetails.jobTitle}</Text>
        <Text style={styles.subtitle}>{jobsDetails2.cName}</Text>
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
        <Text style={styles.sectionText}>Post Date: {jobsDetails.createAt}</Text>
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
