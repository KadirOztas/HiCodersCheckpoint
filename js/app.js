import { renderNav } from "./nav.js";
renderNav();
import { renderStudents } from "./students.js";
renderStudents();
import { renderTeachers } from "./teachers.js";
renderTeachers
const navClickListeners = () => {
    document.getElementById("students-page").addEventListener("click", function (events) {
        events.preventDefault()
        renderStudents()
    })
    document.getElementById("teachers-page").addEventListener("click", function (events) {
        events.preventDefault()
        renderTeachers
    })
}
navClickListeners()