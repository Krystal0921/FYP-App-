import React from 'react';
import { View, Text, ImageBackground, Image, Dimensions, FlatList, TextInput, SafeAreaView, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
import courses from '../../const/courses';
import { NAVIGATION_COURSE, NAVIGATION_MAIN } from '../../const/navigations';
import background from '../../assets/backgroundd.png';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ScreenCourses = ({ navigation }) => {
    const CourseCard = ({ course }) => (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(NAVIGATION_MAIN.lesson, {
                screen: NAVIGATION_COURSE.lessons,
                params: { data: course }
            })}
        >
            <ImageBackground
                source={course.image}
                style={styles.MainAllLessonBackground}
            >
                <Text
                    multiline
                    numberOfLines={2}
                    style={styles.MainAllLessonTitle}
                >
                {course.name}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.MainBackground}>
            <View style={styles.MainTitleImageView}>
                <Image
                    style={styles.MainTitleImage}
                    source={background}
                />
            </View>
            <View>
                <View style={styles.MainSearchView}>
                    <MaterialIcons size={30} name="search"/>
                    <TextInput
                        style={styles.MainSearchText}
                        placeholder="Search for anything"
                    />
                </View>
                <View style={styles.MainAllLessonTextView}>
                    <Text style={styles.MainAllLessonText}>All Lesson</Text>
                </View>
            </View>
            <View style={styles.MainAllLessonList}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={courses}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <CourseCard course={item}/>}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    MainAllLessonList: {
        flex: 1
    },
    MainAllLessonTextView: {
        paddingVertical: 10
    },
    MainAllLessonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    MainSearchText: {
        fontSize: 18,
        marginLeft: 5
    },
    MainSearchView: {
        height: 60,
        marginTop: 35,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        backgroundColor: '#F5F5F7',
        borderRadius: 30,
        alignItems: 'center',
        flexDirection: 'row'
    },
    MainTitleImageView: {
        ustifyContent: 'center',
        alignItems: 'center'
    },
    MainTitleImage: {
        height: 150,
        width: 300,
        resizeMode: 'contain'
    },
    MainBackground: {
        backgroundColor: '#fff',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    MainAllLessonNumber: {
        color: '#8F95B2',
        fontWeight: '600'
    },
    MainAllLessonTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingBottom: 5,
        backgroundColor: '#202020',
        color: '#fff',
        paddingLeft: 10
    },
    MainAllLessonBackground: {
        marginVertical: 10,
        marginHorizontal: 5,
        width: windowWidth / 2 - 30,
        height: windowHeight / 3,
        paddingTop: 25,
        paddingLeft: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
});

export default ScreenCourses;