import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Image, TouchableOpacity, Text, FlatList, View, Dimensions } from 'react-native';
import courses from '../../const/courses';

const ScreenRead = ({ route, navigation }) => {
<<<<<<< Updated upstream
=======
  const { name, data } = route.params;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(1 / 10);
>>>>>>> Stashed changes
  let lessonRead;
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClickNext = (index) => {
<<<<<<< Updated upstream
=======
    setProgress((index + 2) / 10);
>>>>>>> Stashed changes
    try {
      lessonRead.scrollToIndex({ animated: true, index: index + 1 });
    } catch (e) {
      console.log(e);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.SectionReadBackgound}>
      <FlatList
<<<<<<< Updated upstream
        data={courses}
=======
        data={data.page}
        showsVerticalScrollIndicator={false}
>>>>>>> Stashed changes
        horizontal
        pagingEnabled
        scrollEnabled={false}
        ref={(ref) => {
          lessonRead = ref;
        }}
        renderItem={({ item, index }) => (
          <View style={styles.SectionReadInformation}>
<<<<<<< Updated upstream
            <Image style={styles.SectionReadImage} source={item.image} />
            {index + 1 != 3
=======
            <Image style={styles.SectionReadImage} source={item.rImage} />
            <Text>{item.rId}</Text>
            <Text style={styles.SectionReadText}>English Name is: {item.rName}</Text>
            {index + 1 != 10
>>>>>>> Stashed changes
              ? (
                <TouchableOpacity
                  style={styles.SectionReadButton}
                  onPress={() => onClickNext(index)}
                >
                  <Text style={styles.SectionReadButtonText}>Next</Text>
                </TouchableOpacity>
              )
              : (
                <TouchableOpacity
                  style={styles.SectionReadButton}
                  onPress={() => onClickNext(index)}
                >
                  <Text style={styles.SectionReadButtonText}>Finish</Text>
                </TouchableOpacity>
              )}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SectionReadInformation: {
    width: Dimensions.get('screen').width * 0.85,
    marginRight: 15,
    padding: 10
  },
  SectionReadBackgound: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    padding: 20
  },
  SectionReadButton: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    fontSize: 16,
    width: 300,
    backgroundColor: '#264858',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center'
  },
  SectionReadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  SectionReadImage: {
    height: 300,
    width: 300,
    resizeMode: 'contain'
  }
});

export default ScreenRead;

// {index+1!=chapter.length?

//  <TouchableOpacity
//   onPress={()=>onClickNext(index)}
//       style={{backgroundColor:Colors.primary,
//   padding:10,borderRadius:7,position:'absolute',bottom:0,
//   width:'110%'}}>
//           <Text style={{textAlign:'center',color:Colors.white}}>Next</Text>
//   </TouchableOpacity>:

//   <TouchableOpacity
//   onPress={()=>onClickNext(index)}
//       style={{backgroundColor:Colors.green,
//   padding:10,borderRadius:7,position:'absolute',bottom:0,
//   width:'110%'}}>
//           <Text style={{textAlign:'center',color:Colors.white}}>Finish</Text>
//   </TouchableOpacity>
// }
