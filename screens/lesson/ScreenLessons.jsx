import React from 'react';
import { View, Text, ImageBackground, FlatList, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { NAVIGATION_COURSE } from '../../const/navigations';

const ScreenLessons = ({ route: { params: { data } }, navigation:navigation }) => {
    const LessonContentList = ({ content, index }) => (
        <View style={styles.AllLessonBackgroundView}>
            <Text style={styles.AllLessonNumber}>{`0${index + 1}`}</Text>
            <View style={{ paddingHorizontal: 20, flex: 1 }}>
                <Text style={styles.AllLessonTitle}>{content.title}</Text>
            </View>
            <View style={styles.LessonButtonCircle}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate(NAVIGATION_COURSE.lessons, {
                        screen: NAVIGATION_COURSE.quiz
                    })}
                >
                    <MaterialIcons size={30} name="add"/>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <ImageBackground
                source={data.image}
                style={styles.LessonImageBackground}
            >
                <Text style={styles.LessonTitle}>{data.name}</Text>
            </ImageBackground>
            <View style={styles.LessonContentView}>
                <View style={styles.LessonLinkView}>
                    <Text style={styles.LessonLinkText}>Pleace click here for more information of this lesson</Text>
                </View>
                <Text style={styles.LessonConrentText}>Lesson Content</Text>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.courseContent}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <LessonContentList index={index} content={item}/>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    AllLessonBackgroundView: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        flexDirection: 'row'
    },
    AllLessonNumber: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#E4E7F4'
    },
    AllLessonTime: {
        fontSize: 15,
        color: '#A0A5BD',
        fontWeight: '500',
        marginBottom: 5
    },
    AllLessonTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    LessonImageBackground: {
        height: 300,
        paddingTop: 40,
        paddingRight: 20,
        paddingLeft: 20,
        alignItems: 'center'
    },
    LessonTitle: {
        fontSize: 25,
        fontWeight: 'bold'
    },
    LessonButtonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#E0E0E0',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LessonButtonPlayArrow: {
        fontSize: 25,
        color: '#fff'
    },
    LessonLinkView: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    LessonLinkText: {
        paddingTop: 15,
        paddingBottom: 10,
        color: 'blue'
    },
    LessonContentView: {
        flex: 1,
        marginTop: -35,
        backgroundColor: '#fff',
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        height: '100%'
    },
    LessonConrentText: {
        marginBottom: 20,
        marginHorizontal: 20,
        fontSize: 21,
        fontWeight: 'bold'
    }
});

export default ScreenLessons;