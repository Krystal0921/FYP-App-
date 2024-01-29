import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_CHAT, NAVIGATION_MAIN } from '../../const/navigations';

const chatData = [
  {
    id: '1',
    name: 'cherrie0912',
    message: 'Hello, how are you?',
    time: '10:30 AM',
    avatar: require('../../assets/Cherrie.jpeg')
  },
  {
    id: '2',
    name: 'kris0111',
    message: 'I am good, thanks!',
    time: '11:45 AM',
    avatar: require('../../assets/default-profile-picture.jpg')
  }
];

const ScreenChats = () => {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    navigation.navigate(NAVIGATION_MAIN.chat, { screen: NAVIGATION_CHAT.chat, params: { name: 'John' } });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={handleButtonPress}>
      <Image source={item.avatar} style={styles.avatar} />
      <View style={styles.itemContent}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
      <Text style={styles.time}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  MainFooter: {
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#55098b',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  MainIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5
  },
  SettingTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#fafafa'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 20
  },
  itemContent: {
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  message: {
    fontSize: 14,
    color: '#888'
  },
  time: {
    fontSize: 12,
    color: '#888'
  }
});

export default ScreenChats;
