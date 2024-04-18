import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { authContext, useAuth } from '../../components/AuthProvider';

const ScreenChat = ({ route }) => {
  const [inputText, setInputText] = useState('');
  const { user } = useAuth();
  const [userId, setUserId] = useState('');
  const { chatId } = route.params;
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // alert(chatId);
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
          // alert(responseData.data[0].msgId);
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

  const [messages, setMessages] = useState([
    { id: 1, sender: 'You', content: 'Hello!', timestamp: '2024-01-16 10:30:22' },
    { id: 2, sender: 'John', content: 'Hello!', timestamp: '2024-01-17 10:56:22' },
    { id: 3, sender: 'John', content: 'How are you?', timestamp: '2024-01-17 10:56:25' },
    { id: 4, sender: 'You', content: 'Hi Cherrie!', timestamp: '2024-01-17 10:58:22' },
    { id: 5, sender: 'You', content: 'I"m fine!', timestamp: '2024-01-17 10:58:22' }
    // Add more messages here
  ]);

  const renderMessage = ({ item }) => {
    const formattedTime = new Date(item.createAt).toLocaleString();
    // alert(user.userId);
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

  const handleSend = () => {
    if (inputText.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        sender: user.userId,
        content: inputText.trim(),
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]); // Append the new message at the end
      setInputText('');
    }
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
          <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
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
