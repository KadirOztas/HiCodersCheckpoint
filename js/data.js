const classes = JSON.parse(localStorage.getItem("classes")) || [
  {
    title: "Classes",
    details: [
      { class: "Fullstack" },
      { class: "Cloud" },
      { class: "AWS" },
      { class: "Javascript" },
      { class: "Java" },
    ],
  },
];
const students = JSON.parse(localStorage.getItem("students")) || [
  {
    title: "Students",
    details: [
      { name: "Max Hermann", branch: "Fullstack", average_grade: 5.4 },
      { name: "Anthony Egbe", branch: "Cloud", average_grade: 4.9 },
      { name: "Mia Williams", branch: "Cloud", average_grade: 2.7 },
      { name: "Olivia Johnson", branch: "Cloud", average_grade: 4.5 },
      { name: "Amelia Anderson", branch: "AWS", average_grade: 4.2 },
      { name: "William Rodriguez", branch: "Cloud", average_grade: 3.5 },
      { name: "Emma Smith", branch: "Javascript", average_grade: 2.9 },
      { name: "Sophia Lopez", branch: "Java", average_grade: 4.7 },
      { name: "Elijah Jackson", branch: "AWS", average_grade: 3.5 },
      { name: "Harper Martinez", branch: "Fullstack", average_grade: 2.7 },
      { name: "Henry Garcia", branch: "Fullstack", average_grade: 4.5 },
      { name: "Olivia Rodriguez", branch: "Cloud", average_grade: 3.6 },
      { name: "Ava Martin", branch: "Fullstack", average_grade: 2.8 },
      { name: "Henry Davis", branch: "Cloud", average_grade: 4.0 },
      { name: "Lucas Garcia", branch: "Java", average_grade: 2.9 },
      { name: "Elijah Taylor", branch: "Cloud", average_grade: 3.5 },
      { name: "Amelia Moore", branch: "Javascript", average_grade: 2.9 },
      { name: "Amelia Williams", branch: "AWS", average_grade: 3.8 },
      { name: "Olivia Anderson", branch: "Java", average_grade: 2.6 },
      { name: "William Wilson", branch: "Java", average_grade: 3.7 },
      { name: "Alexander Hernandez", branch: "AWS", average_grade: 2.5 },
      { name: "Olivia Miller", branch: "Java", average_grade: 3.9 },
    ],
  },
];
const teachers = JSON.parse(localStorage.getItem("teachers")) || [
  {
    title: "Teachers",
    details: [
      { name: "Hannes Bühler", expertise: "Fullstack" },
      { name: "Ali Sayar", expertise: "Cloud" },
      { name: "Cristian Monedero", expertise: "AWS" },
      { name: "Léonce Blanchet", expertise: "Javascript" },
      { name: "Giuseppina Lori", expertise: "Java" },
    ],
  },
];
export { classes, students, teachers };
