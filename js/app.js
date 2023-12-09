import { renderNav } from "./nav.js";
import { renderStudents } from "./students.js";
import { renderTeachers } from "./teachers.js";
import { renderClasses } from "./classes.js";
import { renderHome } from "./home.js";
import { renderFooter } from "./footer.js";

renderNav();
renderFooter();
window.renderStudents = renderStudents;
window.renderStudents = renderStudents;
window.renderTeachers = renderTeachers;
window.renderClasses = renderClasses;
window.renderHome = renderHome;

const navClickListeners = () => {
  document.getElementById("home-link").addEventListener("click", (event) => {
    event.preventDefault();
    window.renderHome();
  });
  document
    .getElementById("students-page")
    .addEventListener("click", (event) => {
      event.preventDefault();
      renderStudents();
    });
  document
    .getElementById("teachers-page")
    .addEventListener("click", (event) => {
      event.preventDefault();
      renderTeachers();
    });
  document.getElementById("classes-link").addEventListener("click", (event) => {
    event.preventDefault();
    renderClasses();
  });
};

document.addEventListener("DOMContentLoaded", navClickListeners);
