import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, TextInput,} from 'react-native';
import { Switch } from 'react-native-gesture-handler';

const EditForumScreen = ({navigation}) => {
    return (
        <>
            <SafeAreaView style={styles.EditForumBackgound}>
                <Text style={styles.EditForumTitle}>Edit Post</Text>
                <View style={styles.EditForumView}>
                    <Text style={styles.EditForumInputText}>Post Title</Text>
                </View>
                <View style={styles.EditForumView}>
                    <TouchableOpacity style={styles.EditForumButton}>
                        <Text style={styles.EditForumButtonText}>Post Image (Option)</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput multiline={true} numberOfLines={10} style={styles.EditForumDetailsInputText} placeholder="Post Details"/>
                </View>
                <View style={styles.EditForumView}>
                    <TouchableOpacity style={styles.EditForumButton}>
                        <Text style={styles.EditForumButtonText}>Create</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    EditForumTitle: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
    },
    EditForumInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 20,
        height: 50,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        alignItems: 'center',
    },
    EditForumView: {
        paddingTop: 20,
        flex: 1,
    },
    EditForumDetailsView: {
        paddingTop: 50,
        flex: 1,
    },
    EditForumButton: {
        borderRadius: 5,
        fontSize: 16,
        width: 300,
        backgroundColor: '#264858',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    EditForumButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    EditForumDetailsInputText: {
        backgroundColor: '#F5F5F7',
        padding: 15,
        borderRadius: 5,
        fontSize: 16,
        height: 300,
        width: 300,
        marginVertical: 3,
        marginBottom: 10,
        paddingBottom: 10,
        paddingTop: 10,
        textAlignVertical: 'top', 
    },
    EditForumBackgound: {
        justifyContent: 'center',
        backgroundColor: '#fff',
        flex: 1,
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
});

export default EditForumScreen;