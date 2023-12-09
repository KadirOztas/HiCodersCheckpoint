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
      { name: "Max Hermann", branch: "Fullstack", exam_1: 1.32, exam_2: 3.52 },
      { name: "Anthony Egbe", branch: "Cloud", exam_1: 2.04, exam_2: 4.82 },
      { name: "Mia Williams", branch: "Cloud", exam_1: 4.52, exam_2: 4.52 },
      { name: "Olivia Johnson", branch: "Cloud", exam_1: 2.34, exam_2: 0.2 },
      { name: "Amelia Anderson", branch: "AWS", exam_1: 3.26, exam_2: 0.44 },
      {
        name: "William Rodriguez",
        branch: "Cloud",
        exam_1: 0.16,
        exam_2: 3.88,
      },
      { name: "Emma Smith", branch: "Javascript", exam_1: 1.78, exam_2: 4.44 },
      { name: "Sophia Lopez", branch: "Java", exam_1: 0.69, exam_2: 0.8 },
      { name: "Elijah Jackson", branch: "AWS", exam_1: 3.87, exam_2: 3.84 },
      {
        name: "Harper Martinez",
        branch: "Fullstack",
        exam_1: 4.75,
        exam_2: 0.54,
      },
      { name: "Henry Garcia", branch: "Fullstack", exam_1: 1.35, exam_2: 4.45 },
      { name: "Olivia Rodriguez", branch: "Cloud", exam_1: 4.62, exam_2: 5.38 },
      { name: "Ava Martin", branch: "Fullstack", exam_1: 5.16, exam_2: 5.12 },
      { name: "Henry Davis", branch: "Cloud", exam_1: 3.8, exam_2: 3.32 },
      { name: "Lucas Garcia", branch: "Java", exam_1: 5.17, exam_2: 4.58 },
      { name: "Elijah Taylor", branch: "Cloud", exam_1: 3.91, exam_2: 2.66 },
      {
        name: "Amelia Moore",
        branch: "Javascript",
        exam_1: 5.09,
        exam_2: 3.72,
      },
      { name: "Amelia Williams", branch: "AWS", exam_1: 4.58, exam_2: 1.68 },
      { name: "Olivia Anderson", branch: "Java", exam_1: 0.82, exam_2: 2.4 },
      { name: "William Wilson", branch: "Java", exam_1: 1.03, exam_2: 3.03 },
      {
        name: "Alexander Hernandez",
        branch: "AWS",
        exam_1: 1.51,
        exam_2: 4.02,
      },
      { name: "Olivia Miller", branch: "Java", exam_1: 5.52, exam_2: 2.86 },
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
