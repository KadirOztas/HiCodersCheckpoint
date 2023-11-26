import { renderNav } from "./nav.js";
import { renderStudents } from "./students.js";
import { renderTeachers } from "./teachers.js";
import { renderClasses } from "./classes.js";

renderNav();
renderStudents();
renderTeachers();

// Event listener functions:
const navClickListeners = () => {
  document
    .getElementById("students-page")
    .addEventListener("click", function (event) {
      event.preventDefault();
      renderStudents();
    });
  document
    .getElementById("teachers-page")
    .addEventListener("click", function (event) {
      event.preventDefault();
      renderTeachers();
    });
  document
    .getElementById("classes-link")
    .addEventListener("click", function (event) {
      event.preventDefault();
      renderClasses();
    });
};

navClickListeners();
