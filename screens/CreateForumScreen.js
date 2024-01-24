import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput,} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const CreateForumScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.CreateForumBackgound}>
                <Text style={styles.CreateForumTitle}>Create A Post</Text>
                <View style={styles.CreateForumView}>
                    <TextInput style={styles.CreateForumInputText} placeholder="Post Title"/>
                </View>
                <View style={styles.CreateForumView}>
                    <TouchableOpacity style={styles.CreateForumButton}>
                        <Text style={styles.CreateForumButtonText}>Post Image (Option)</Text>
                    </TouchableOpacity>
                </View>
                <View style={{paddingTop: 50,}}>
                    <TextInput multiline={true} numberOfLines={6} style={styles.CreateForumDetailsInputText} placeholder="Post Details"/>
                </View>
                <View style={styles.CreateForumView}>
                    <TouchableOpacity style={styles.CreateForumButton}>
                        <Text style={styles.CreateForumButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    CreateForumTitle: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
    },
    CreateForumInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        height: 60,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
    },
    CreateForumView: {
        paddingTop: 50,
        flex: 1,
    },
    CreateForumDetailsView: {
        paddingTop: 50,
        flex: 1,
    },
    CreateForumButton: {
        borderRadius: 5,
        fontSize: 16,
        width: 300,
        backgroundColor: '#264858',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    CreateForumButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    CreateForumDetailsInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        height: 200,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        textAlignVertical: 'top', 
    },
    CreateForumBackgound: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export default CreateForumScreen;