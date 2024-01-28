const courseContent = [
  { id: 'S001', title: 'Number and Letter' },
  { id: 'S002', title: 'Time Related' },
  { id: 'S003', title: 'Weather' },
  { id: 'S004', title: 'Animal' },
  { id: 'S005', title: 'Greeting' }
];

const courses = [
  {
    id: 'L001',
    name: 'Daily Communication',
    totalCourse: '25',
    image: require('../assets/daily-communication.jpg'),
    price: '50',
    star: '4.3',
    students: '10',
    courseContent
  },
  {
    id: 'L002',
    name: 'Travel Communication',
    totalCourse: '20',
    image: require('../assets/travel-communication.png'),
    price: '50',
    star: '4.1',
    students: '55',
    courseContent
  },
  {
    id: 'L003',
    name: 'Workplace Communication',
    totalCourse: '10',
    image: require('../assets/workplace-communication.jpg'),
    price: '50',
    star: '4.3',
    students: '10',
    courseContent
  }
];

export default courses;
