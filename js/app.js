const school = [
  {
    id: 1,
    title: "teachers",
    details: [
      { name: "Hannes Bühler", expertise: "Javascript" },
      { name: "Ali Sayar", expertise: "AWS" },
    ],
  },
  {
    id: 2,
    title: "students",
    details: [
      { name: "Max Hermann", branch: "Fullstack", average_grade: 5.4 },
      { name: "Anthony Egbe", branch: "Cloud", average_grade: 4.9 },
    ],
  },
  {
    id: 3,
    title: "classes",
    details: [{ class: "Fullstack" }, { class: "Cloud" }],
  },
];
// I need to make a commit about id situation too.

import { renderNav } from "./nav.js";