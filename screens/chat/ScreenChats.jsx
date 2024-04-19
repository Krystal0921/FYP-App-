import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NAVIGATION_CHAT, NAVIGATION_MAIN } from '../../const/navigations';
import { authContext, useAuth } from '../../components/AuthProvider';

const ScreenChats = () => {
  const navigation = useNavigation();
  const { user } = useAuth();
  const [userId, setUserId] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatsInformation, setChatsInformation] = useState([]);

  useEffect(() => {
    const fetchChatsData = async () => {
      try {
        const fetchChatsData = async () => {
          const data = {
            userId: user.userId
          };
          const response = await fetch('http://44.221.91.193:3000/ChatList', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          const responseData = await response.json();
          if (responseData.success) {
            setChatsInformation(responseData.data);
            setUserId(responseData.data[0].chatId);
          } else {
            alert(responseData.msg || 'Failed to fetch chats data');
          }
        };
        await Promise.all([fetchChatsData()]);
      } catch (error) {
        alert('Chats Error');
      }
    };
    fetchChatsData();
  }, [userId]);

  useEffect(() => {
    const fetchMessagesData = async (chatId) => {
      try {
        const data = {
          chatId
        };
        const response = await fetch('http://44.221.91.193:3000/ChatMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (responseData.success) {
          setMessages(responseData.data);
        } else {
          alert(responseData.msg || 'Failed to fetch chats data');
        }
      } catch (error) {
        console.log('Chat Error');
      }
    };

    if (chatsInformation.length > 0) {
      const { chatId } = chatsInformation[0];
      fetchMessagesData(chatId);
    }
  }, [chatsInformation]);

  const renderItem = ({ item }) => {
    const formattedTime = new Date(item.createAt).toLocaleString();

    let lastMessageContent = '';
    if (item.chatId === chatsInformation[0].chatId && messages.length > 0) {
      const lastMessage = messages[messages.length - 1];
      lastMessageContent = lastMessage.msg_content;
    }

    return (
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate(NAVIGATION_MAIN.chat, {
          screen: NAVIGATION_CHAT.chat,
          params: { name: item.userName, chatId: item.chatId }
        })}
      >
        <Image source={require('../../assets/default-profile-picture.jpg')} style={styles.avatar} />
        <View style={styles.itemContent}>
          <Text style={styles.name}>{item.userName}</Text>
          <Text style={styles.message}>{lastMessageContent}</Text>
        </View>
        <Text style={styles.time}>{formattedTime}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={chatsInformation}
        renderItem={renderItem}
        keyExtractor={(item) => item.chatId.toString()}
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
    backgroundColor: '#fafafa',
    paddingTop: 30
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
