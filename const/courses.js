const courses = [
  {
    id: "L001",
    name: "Daily Communication",
    totalCourse: "25",
    image: require("../assets/daily-communication.jpg"),
    courseContent: [
      { id: "S001", title: "Number and Letter" },
      { id: "S002", title: "Time Related" },
      { id: "S003", title: "Weather" },
      { id: "S004", title: "Animal" },
      { id: "S005", title: "Greeting" },
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
    courseContent: [
      { id: "S006", title: "Place" },
      { id: "S007", title: "Food" },
      { id: "S008", title: "Transportation" },
      { id: "S009", title: "Festival" },
      { id: "S010", title: "Phrase for travel" },
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
    courseContent: [
      { id: "S011", title: "Job Occupation" },
      { id: "S012", title: "Job Related Tools" },
      { id: "S013", title: "Workplace Environment" },
      { id: "S014", title: "Vocabulary for Meeting" },
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
