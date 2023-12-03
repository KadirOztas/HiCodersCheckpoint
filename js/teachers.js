import { teachers } from "./data.js";
import { addModal } from "./modal.js";
function renderTeachers() {
  const dynamicContent = document.getElementById("dynamic-content");
  let htmlContent = `<div class="fluid-container">`;
  let teacherHeader = `<div class="row m-4">
    <div class="col-xl-10">
      <h4 id="teachers-header">${teachers[0].title}</h4>
    </div>
  </div>`;
  htmlContent += teacherHeader;
  htmlContent += `<div class="row px-5 d-flex justify-content-center align-item-center">`;
  teachers[0].details.forEach((teacher) => {
    let teacherContent = `
      <div class="card col-xl-5 m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${teacher.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teacher.expertise} Expertise</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link" onclick="window.renderStudents()">Students</a>
          <a href="#" class="card-link" onclick="window.renderClasses()">Classes</a>
        </div>
      </div>
    `;
    htmlContent += teacherContent;
  });
  htmlContent += `</div>`;
  htmlContent += `
    <div class="d-flex flex-column align-items-center">
      <button type="button" id="add-teacher-button" class="btn btn-light btn-lg">
        <i class="bi bi-plus-circle"></i> Add new Teacher
      </button>
    </div>`;
  htmlContent += `</div>`;
  dynamicContent.innerHTML = htmlContent;
  const addTeacherButton = document.getElementById("add-teacher-button");
  if (addTeacherButton) {
    addTeacherButton.addEventListener("click", () => {
      promptWithModal("Add New Teacher", (data) => {
        if (data) {
          const [name, expertise] = data;
          addNewTeacher(name, expertise);
        }
      });
    });
  }
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
        promptWithModal("Add New Teacher", (data) => {
          if (data) {
            const [name, expertise] = data;
            addNewTeacher(name, expertise);
          }
        });
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
function promptWithModal(title, callbackOnConfirm) {
  const modalBody = `
    <div class="mb-3">
      <label for="teacher-name" class="form-label">Name and Surname</label>
      <input type="text" id="teacher-name" class="form-control" required>
    </div>
    <div class="mb-3">
      <label for="teacher-expertise" class="form-label">Expertise</label>
      <input type="text" id="teacher-expertise" class="form-control" required>
    </div>
  `;
  addModal(
    title,
    modalBody,
    () => {
      const name = document.getElementById("teacher-name").value.trim();
      const expertise = document
        .getElementById("teacher-expertise")
        .value.trim();
      if (name && expertise) {
        callbackOnConfirm([name, expertise]);
      }
    },
    () => {}
  );
}
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers();
});
export { teachers, renderTeachers };
