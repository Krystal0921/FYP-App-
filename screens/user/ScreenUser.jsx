import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Pressable } from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../components/AuthProvider';

const user = [
  {
    sid: 'm0000001',
    name: 'cherrie0912',
    email: 'cherrie@pg95.com',
    icon: require('../../assets/Cherrie.jpeg'),
    lesson1Progress: 60,
    lesson2Progress: 10,
    lesson3Progress: 90
  }
];

const ScreenUser = () => {
  const navigation = useNavigation();
  const [isAnimated, setIsAnimated] = useState(false);
  const { onLogout } = useAuth();
  const handleAnimate = () => {
    setIsAnimated(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.vertical}>
        <Image style={styles.logo} source={user[0].icon} />
        <View style={styles.vertical}>
          <Text style={styles.text}>Name : {user[0].name}</Text>
          <Text style={styles.text}>E-mail : {user[0].email}</Text>
        </View>
      </View>
      <View style={styles.hrLine} />
      <Text style={styles.progressTitle}>Progress</Text>
      <View style={styles.horizontally}>
        <TouchableOpacity onPress={handleAnimate}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={user[0].lesson1Progress}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: 'red', value: 0 },
                { color: 'skyblue', value: 50 },
                { color: 'yellowgreen', value: 100 }
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Lesson 1</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAnimate}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={user[0].lesson2Progress}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: 'red', value: 0 },
                { color: 'skyblue', value: 50 },
                { color: 'yellowgreen', value: 100 }
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Lesson 2</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAnimate}>
          <View style={styles.progressContainer}>
            <CircularProgress
              value={user[0].lesson3Progress}
              radius={50}
              strokeWidth={5}
              backgroundColor="#e0e0e0"
              strokeColorConfig={[
                { color: 'red', value: 0 },
                { color: 'skyblue', value: 50 },
                { color: 'yellowgreen', value: 100 }
              ]}
              animate={isAnimated}
              duration={800}
            />
            <Text style={styles.text}>Lesson 3</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onLogout()}><Text>Logout</Text></TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  hrLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 16
  },
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 60
  },
  MainFooter: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#55098b',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  horizontally: {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  vertical: {
    flexDirection: 'column',
    alignSelf: 'center'
  },
  hrLine: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginVertical: 16
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginVertical: 16,
    alignSelf: 'center'
  },
  progressContainer: {
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 10,
    marginVertical: 16
  },
  progressTitle: {
    fontSize: 30,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  text: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default ScreenUser;
