import { teachers } from "./data.js";
import { addModal, createCard, promptWithModal } from "./modal.js";

function renderTeachers() {
  const dynamicContent = document.getElementById("dynamic-content");
  let htmlContent = `<div class="fluid-container">`;
  let teacherHeader = `<div class="row m-4">
    <div class="col-xl-10">
      <h4 id="teachers-header">${teachers[0].title}</h4>
    </div>
  </div>`;
  htmlContent += teacherHeader;
  htmlContent += `<div class="row d-flex justify-content-center align-items-center">`;
teachers[0].details.forEach((teacher) => {
  htmlContent += createCard(
    teacher.name,
    `${teacher.expertise} Expertise`,
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    `<a href="#" class="card-link" onclick="window.renderStudents()">Students</a>`,
    `<a href="#" class="card-link" onclick="window.renderClasses()">Classes</a>`
  );
});
  htmlContent += `</div></div>`;
  htmlContent += `
    <div class="d-flex flex-column align-items-center">
      <button type="button" id="add-teacher-button" class="btn btn-light btn-lg">
        <i class="bi bi-plus-circle"></i> Add new Teacher
      </button>
    </div>`;
  htmlContent += `</div>`;
  dynamicContent.innerHTML = htmlContent;
 attachAddTeacherButtonListener()
}
function addNewTeacher(name, expertise) {
  const isExpertiseExists = teachers[0].details.some(
    (teacher) => teacher.expertise === expertise
  );

  if (isExpertiseExists) {
    addModal(
      "Expertise Already Exists",
      `The expertise "${expertise}" already exists. Do you want to try again?`,
      () => {
        promptWithModal(
          "Add New Teacher",
          [
            { id: "teacher-name", label: "Name", type: "text" },
            { id: "teacher-expertise", label: "Expertise", type: "text" },
          ],
          (name, expertise) => {
            addNewTeacher(name, expertise);
          }
        );
      },
      null
    );
  } else {
    const newTeacher = { name, expertise };
    teachers[0].details.push(newTeacher);
    localStorage.setItem("teachers", JSON.stringify(teachers));
    renderTeachers();
  }
}
function attachAddTeacherButtonListener() {
  const addTeacherButton = document.getElementById("add-teacher-button");
  if (addTeacherButton) {
    addTeacherButton.addEventListener("click", () => {
      promptWithModal(
        "Add New Teacher",
        [
          { id: "teacher-name", label: "Name", type: "text" },
          { id: "teacher-expertise", label: "Expertise", type: "text" },
        ],
        (name, expertise) => {
          addNewTeacher(name, expertise);
        }
      );
    });
  }
}
function attachLinkEventListeners() {
  const studentLinks = document.querySelectorAll(".card-link-students"); 
  studentLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("students-page").click();
    });
  });
  const classLinks = document.querySelectorAll(".card-link-classes"); 
  classLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("classes-link").click();
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers();
  attachLinkEventListeners();
  attachAddTeacherButtonListener();
});
export {renderTeachers };
