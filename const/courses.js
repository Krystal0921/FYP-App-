const courseContent = [
    {title: 'Number and Letter',},
    {title: 'Time Related'},
    {title: 'Weather'},
    {title: 'Animal'},
];
  
const courses = [
    {
        name: 'Daily Communication',
        totalCourse: '25',
        image: require('../assets/daily-communication.jpg'),
        price: '50',
        star: '4.3',
        students: '10',
        courseContent,
    },
    {
        name: 'Travel Communication',
        totalCourse: '20',
        image: require('../assets/travel-communication.png'),
        price: '50',
        star: '4.1',
        students: '55',
        courseContent,
    },
    {
        name: 'Workplace Communication',
        totalCourse: '10',
        image: require('../assets/workplace-communication.jpg'),
        price: '50',
        star: '4.3',
        students: '10',
        courseContent,
    },
];
  
export default courses;