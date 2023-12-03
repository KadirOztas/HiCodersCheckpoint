import { teachers } from "./data.js";
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
      const name = prompt("Please enter the new teacher's name:");
      const expertise = prompt("Please enter the teacher's expertise:");
      if (name && expertise) {
        addNewTeacher(name, expertise);
      }
    });
  }
}
function addNewTeacher(name, expertise) {
  const newTeacher = { name, expertise };
  teachers[0].details.push(newTeacher);
  localStorage.setItem("teachers", JSON.stringify(teachers));
  renderTeachers();
}
document.addEventListener("DOMContentLoaded", () => {
  renderTeachers();
});
export { teachers, renderTeachers };
