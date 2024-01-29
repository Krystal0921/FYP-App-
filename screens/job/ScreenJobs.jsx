import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { debounce } from 'lodash';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_JOB, NAVIGATION_MAIN } from '../../const/navigations';

const initialJobData = [
  {
    id: '1',
    jobTitle: 'Full-time Library Materials Organizer',
    companyName: 'Adecco Personnel Limited',
    avatar: require('../../assets/adecco.png')
  },
  {
    id: '2',
    jobTitle: 'Part-time Library Materials Organizer',
    companyName: 'Adecco Personnel Limited',
    avatar: require('../../assets/adecco.png')
  },
  {
    id: '3',
    jobTitle: 'Barista',
    companyName: 'Séan Café & Lounge',
    avatar: require('../../assets/sean_cafe.jpg')
  },
  {
    id: '4',
    jobTitle: 'Waiters',
    companyName: 'Séan Café & Lounge',
    avatar: require('../../assets/sean_cafe.jpg')
  },
  {
    id: '5',
    jobTitle: 'Mechanic Assistant (Tire)',
    companyName: 'The Kowloon Motor Bus Co. (1933) Ltd',
    avatar: require('../../assets/kmb.png')
  },
  {
    id: '6',
    jobTitle: 'Assistant Officer, Customer Service',
    companyName: 'The Kowloon Motor Bus Co. (1933) Ltd',
    avatar: require('../../assets/kmb.png')
  }
];

const ScreenJobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredJobs, setFilteredJobs] = useState(initialJobData);

  useEffect(() => {
    const debouncedSearch = debounce(handleSearch, 300); // Debounce the search function
    debouncedSearch();

    return () => {
      debouncedSearch.cancel(); // Cancel the debounce on component unmount
    };
  }, [searchQuery]);

  const handleSearch = () => {
    const filtered = initialJobData.filter((job) => job.jobTitle.toLowerCase().includes(searchQuery.toLowerCase()) || job.companyName.toLowerCase().includes(searchQuery.toLowerCase()));
    setFilteredJobs(filtered);
  };

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.jobItem}
      onPress={() => navigation.navigate(NAVIGATION_MAIN.job, {
        screen: NAVIGATION_JOB.job,
        params: { name: '' }
      })}
    >
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.jobDetails}>
        <Text style={styles.jobTitle}>{item.jobTitle}</Text>
        <Text style={styles.jobSubtitle}>{item.companyName}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TouchableOpacity>
            <MaterialIcons size={30} name="search" />
          </TouchableOpacity>
          <TextInput
            style={styles.searchInput}
            placeholder="Search jobs by job title, company"
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      <FlatList
        data={filteredJobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.jobList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7'
  },
  header: {
    backgroundColor: '#fff',
    paddingVertical: 16,
    paddingHorizontal: 24,
    paddingTop: 50
  },
  MainFooter: {
    flexDirection: 'row',
    height: 80,
    paddingTop: 10,
    backgroundColor: '#55098b',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  searchContainer: {
    backgroundColor: '#f1f3f4',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  searchInput: {
    flex: 1,
    height: '100%',
    color: '#333',
    fontSize: 16,
    marginLeft: 8
  },
  jobList: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 20
  },
  jobItem: {
    backgroundColor: 'white',
    height: 100,
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  jobDetails: {
    flex: 1,
    marginRight: 16
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  jobSubtitle: {
    fontSize: 18,
    color: '#777',
    marginTop: 10
  }
});

export default ScreenJobs;
