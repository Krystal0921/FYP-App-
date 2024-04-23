import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { authContext, useAuth } from '../../components/AuthProvider';

const ScreenChat = ({ route }) => {
  const [inputText, setInputText] = useState('');
  const { user } = useAuth();
  const { chatId } = route.params;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        chatId
      };
      try {
        const response = await fetch('http://44.221.91.193:3000/ChatMessage', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
        const responseData = await response.json();
        if (responseData.success) {
          setChats(responseData.data);
        } else {
          alert(responseData.msg || 'Failed to fetch chats data');
        }
      } catch (error) {
        console.log('Chat Error');
      }
    };
    fetchData();
  }, [chatId]);

  const renderMessage = ({ item }) => {
    const formattedTime = new Date(item.createAt).toLocaleString();
    const isUser = user.userId === item.userId;
    const messageContainerStyle = isUser ? styles.userMessageContainer : styles.senderMessageContainer;
    const messageTextStyle = isUser ? styles.userMessageText : styles.senderMessageText;

    return (
      <View style={messageContainerStyle}>
        <Text style={messageTextStyle}>{item.msg_content}</Text>
        <Text style={styles.timestamp}>{formattedTime}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.messagesContainer}>
        <FlatList
          data={chats}
          renderItem={renderMessage}
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'position' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type your message..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
          />
          <TouchableOpacity style={styles.sendButton}>
            <Text style={styles.sendButtonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  SettingTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },
  messagesContainer: {
    flex: 1,
    paddingTop: 16,
    paddingHorizontal: 12
  },
  senderMessageContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCF8C6',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    maxWidth: '70%'
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    backgroundColor: '#E5E5EA',
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
    maxWidth: '70%'
  },
  senderMessageText: {
    fontSize: 16,
    color: '#000'
  },
  userMessageText: {
    fontSize: 16,
    color: '#000'
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    alignSelf: 'flex-end'
  },
  inputContainer: {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#CCCCCC',
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: 'white'
  },
  input: {
    height: 40,
    flex: 1,
    fontSize: 16,
    marginRight: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 20
  },
  sendButton: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  sendButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default ScreenChat;
