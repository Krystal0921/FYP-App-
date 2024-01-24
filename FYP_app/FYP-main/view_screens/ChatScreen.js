import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Keyboard,} from 'react-native';

const ChatScreen = () => {
    const [inputText, setInputText] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, sender: 'You', content: 'Hello!', timestamp: '2024-01-16 10:58:22' },
        { id: 2, sender: 'John', content: 'Hello!', timestamp: '2024-01-17 10:56:22' },
        { id: 3, sender: 'John', content: 'How are you?', timestamp: '2024-01-17 10:56:25' },
        { id: 4, sender: 'You', content: 'Hi John!', timestamp: '2024-01-17 10:58:22' },
        { id: 5, sender: 'You', content: 'H!', timestamp: '2024-01-17 10:58:22' },
        { id: 6, sender: 'You', content: 'I"m fine!', timestamp: '2024-01-17 10:58:22' },
        // Add more messages here
    ]);

  
    const renderMessage = ({ item }) => {
        const isUser = item.sender === 'You';
        const messageContainerStyle = isUser ? styles.userMessageContainer : styles.senderMessageContainer;
        const messageTextStyle = isUser ? styles.userMessageText : styles.senderMessageText;

        return (
            <View style={messageContainerStyle}>
                <Text style={messageTextStyle}>{item.content}</Text>
                <Text style={styles.timestamp}>{item.timestamp}</Text>
            </View>
        );
    };

  
    const handleSend = () => {
        if (inputText.trim() !== '') {
            const newMessage = {
                id: messages.length + 1,
                sender: 'You',
                content: inputText.trim(),
                timestamp: new Date(),
            };
            setMessages([...messages, newMessage]); // Append the new message at the end
            setInputText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.messagesContainer}>
                <Text style={styles.SettingTitle}>John</Text>
                <FlatList
                    data={messages}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={renderMessage}
                    // Remove the "inverted" prop to start messages from the top
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0} // Adjust the value as needed
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
        paddingTop: 20,
    },
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    messagesContainer: {
        flex: 1,
        paddingTop: 16,
        paddingHorizontal: 12,
    },
    senderMessageContainer: {
        alignSelf: 'flex-start',
        backgroundColor: '#DCF8C6',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        maxWidth: '70%',
    },
    userMessageContainer: {
        alignSelf: 'flex-end',
        backgroundColor: '#E5E5EA',
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
        maxWidth: '70%',
    },
    senderMessageText: {
        fontSize: 16,
        color: '#000',
    },
    userMessageText: {
        fontSize: 16,
        color: '#000',
    },
    timestamp: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
        alignSelf: 'flex-end',
    },
    inputContainer: {
        height: 100,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#CCCCCC',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'white',
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
        borderRadius: 20,
    },
    sendButton: {
        backgroundColor: '#007bff',
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    sendButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ChatScreen;