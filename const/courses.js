const courses = [
  {
    id: "L001",
    name: "Daily Communication",
    totalCourse: "25",
    image: require("../assets/daily-communication.jpg"),
<<<<<<< Updated upstream
    courseContent: [
      { id: "S001", title: "Number and Letter" },
      { id: "S002", title: "Time Related" },
      { id: "S003", title: "Weather" },
      { id: "S004", title: "Animal" },
      { id: "S005", title: "Greeting" },
=======
    sessions: [
      {
        id: "S001",
        title: "Number and Letter",
        page: [
          {
            rId: "R101",
            rName: "One",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R102",
            rName: "Two",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R103",
            rName: "Three",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R104",
            rName: "Four",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R105",
            rName: "Five",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R106",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
          {
            rId: "R107",
            rName: "B",
            rImage: require("../assets/B.png"),
          },
          {
            rId: "R108",
            rName: "C",
            rImage: require("../assets/C.png"),
          },
          {
            rId: "R109",
            rName: "D",
            rImage: require("../assets/D.png"),
          },
          {
            rId: "R110",
            rName: "E",
            rImage: require("../assets/E.png"),
          },
        ],
      },
      {
        id: "S002",
        title: "Time Related",
        page: [
          {
            rId: "R101",
            rName: "Morning",
            rImage: require("../assets/Morning.png"),
          },
          {
            rId: "R102",
            rName: "Afternoon",
            rImage: require("../assets/Afternoon.png"),
          },
          {
            rId: "R103",
            rName: "Noon",
            rImage: require("../assets/Noon.png"),
          },
          {
            rId: "R104",
            rName: "Yesterday",
            rImage: require("../assets/Yesterday.png"),
          },
          {
            rId: "R105",
            rName: "Today",
            rImage: require("../assets/Today.png"),
          },
          {
            rId: "R106",
            rName: "Tomorrow",
            rImage: require("../assets/Tomorrow.png"),
          },
          {
            rId: "R107",
            rName: "Night",
            rImage: require("../assets/Night.png"),
          },
          {
            rId: "R108",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R109",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R110",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
        ],
      },
      {
        id: "S003",
        title: "Weather",
        page: [
          {
            rId: "R101",
            rName: "Rain",
            rImage: require("../assets/Rain.png"),
          },
          {
            rId: "R102",
            rName: "Rainbow",
            rImage: require("../assets/Rainbow.png"),
          },
          {
            rId: "R103",
            rName: "Snow",
            rImage: require("../assets/Snow.png"),
          },
          {
            rId: "R104",
            rName: "Wind",
            rImage: require("../assets/Wind.png"),
          },
          {
            rId: "R105",
            rName: "Sunny",
            rImage: require("../assets/Sunny.png"),
          },
          {
            rId: "R106",
            rName: "Thunder",
            rImage: require("../assets/Thunder.png"),
          },
          {
            rId: "R107",
            rName: "Cloud",
            rImage: require("../assets/Cloud.png"),
          },
          {
            rId: "R108",
            rName: "Cloudy Day",
            rImage: require("../assets/Cloudy_day.png"),
          },
          {
            rId: "R109",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R110",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
        ],
      },
      {
        id: "S004",
        title: "Animal",
        page: [
          {
            rId: "R101",
            rName: "Monkey",
            rImage: require("../assets/Monkey.png"),
          },
          {
            rId: "R102",
            rName: "Lion",
            rImage: require("../assets/Lion.png"),
          },
          {
            rId: "R103",
            rName: "Frog",
            rImage: require("../assets/Frog.png"),
          },
          {
            rId: "R104",
            rName: "Deer",
            rImage: require("../assets/Deer.png"),
          },
          {
            rId: "R105",
            rName: "Eagle",
            rImage: require("../assets/Eagle.png"),
          },
          {
            rId: "R106",
            rName: "Elephant",
            rImage: require("../assets/Elephant.png"),
          },
          {
            rId: "R107",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R108",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R109",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R110",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
        ],
      },
      {
        id: "S005",
        title: "Greeting",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
>>>>>>> Stashed changes
    ],
    quiz: {
      id: "Q001",
      title: "Daily Communication Quiz",
      questions: [
        { id: "Q001", question: "What is this photo represent of?" },
        {
          id: "Q002",
          question:
            "Please identify the following sign language in this video.",
        },
        // Add more
      ],
    },
  },
  {
    id: "L002",
    name: "Travel Communication",
    totalCourse: "20",
    image: require("../assets/travel-communication.png"),
<<<<<<< Updated upstream
    courseContent: [
      { id: "S006", title: "Place" },
      { id: "S007", title: "Food" },
      { id: "S008", title: "Transportation" },
      { id: "S009", title: "Festival" },
      { id: "S010", title: "Phrase for travel" },
=======
    sessions: [
      {
        id: "S006",
        title: "Place",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S007",
        title: "Food",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S008",
        title: "Transportation",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S009",
        title: "Festival",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S010",
        title: "Phrase for travel",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
>>>>>>> Stashed changes
    ],
    quiz: {
      id: "Q002",
      title: "Travel Communication Quiz",
      questions: [
        // Quiz question in this section
      ],
    },
  },
  {
    id: "L003",
    name: "Workplace Communication",
    totalCourse: "10",
    image: require("../assets/workplace-communication.jpg"),
<<<<<<< Updated upstream
    courseContent: [
      { id: "S011", title: "Job Occupation" },
      { id: "S012", title: "Job Related Tools" },
      { id: "S013", title: "Workplace Environment" },
      { id: "S014", title: "Vocabulary for Meeting" },
=======
    sessions: [
      {
        id: "S011",
        title: "Job Occupation",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S012",
        title: "Job Related Tools",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S013",
        title: "Workplace Environment",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
      {
        id: "S014",
        title: "Vocabulary for Meeting",
        page: [
          {
            rId: "R101",
            rName: "Name",
            rImage: require("../assets/Name.png"),
          },
          {
            rId: "R102",
            rName: "Thank You",
            rImage: require("../assets/Thank_You.png"),
          },
          {
            rId: "R103",
            rName: "Bye",
            rImage: require("../assets/Bye.png"),
          },
          {
            rId: "R104",
            rName: "Bow",
            rImage: require("../assets/Bow.png"),
          },
          {
            rId: "R105",
            rName: "1",
            rImage: require("../assets/1.png"),
          },
          {
            rId: "R106",
            rName: "2",
            rImage: require("../assets/2.png"),
          },
          {
            rId: "R107",
            rName: "3",
            rImage: require("../assets/3.png"),
          },
          {
            rId: "R108",
            rName: "4",
            rImage: require("../assets/4.png"),
          },
          {
            rId: "R109",
            rName: "5",
            rImage: require("../assets/5.png"),
          },
          {
            rId: "R110",
            rName: "A",
            rImage: require("../assets/A.png"),
          },
        ],
      },
>>>>>>> Stashed changes
      { id: "S015", title: "Interview" },
    ],
    quiz: {
      id: "Q003",
      title: "Workplace Communication Quiz",
      questions: [
        // Quiz question in this section
      ],
    },
  },
];

export default courses;
