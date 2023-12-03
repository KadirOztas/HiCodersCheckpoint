import { students } from "./data.js";
function renderStudents() {
  const dynamicContent = document.getElementById("dynamic-content");
  let htmlContent = `<div class="fluid-container-student">`;
  const studentsHeader = `
    <div class="row m-4">
      <div class="col-xl-10">
        <h4 id="students-header">${students[0].title}</h4>
      </div>
    </div>
    `;
  htmlContent += studentsHeader;
  htmlContent += `<div class="row px-5 d-flex justify-content-center align-items-center">`;
  students[0].details.forEach((student) => {
    htmlContent += `
      <div class="card col-xl-5 m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${student.branch}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <p class="average-text">${student.average_grade}</p>
        </div>
      </div>`;
  });
  htmlContent += `</div>
    <div class="d-flex flex-column align-items-center">
      <button type="button" id="add-student-button" class="btn btn-light btn-lg">
        <i class="bi bi-plus-circle"></i> Add new Student
      </button>
    </div>
  </div>`;
  dynamicContent.innerHTML = htmlContent;
  attachAddStudentButtonListener();
}
document.addEventListener("DOMContentLoaded", () => {
  renderStudents();
  attachAddStudentButtonListener();
});
function addNewStudent(name, branch, average_grade) {
  const newStudent = { name, branch, average_grade };
  students[0].details.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
  renderStudents();
}
function attachAddStudentButtonListener() {
  const addStudentButton = document.getElementById("add-student-button");
  if (addStudentButton) {
    addStudentButton.addEventListener("click", () => {
      const name = prompt("Please enter the new student's name:");
      const branch = prompt("Please enter the student's branch:");
      const average_grade = parseFloat(
        prompt("Please enter the student's average grade:")
      );
      if (name && branch && !isNaN(average_grade)) {
        addNewStudent(name, branch, average_grade);
      } else {
        alert("Please enter valid student information.");
      }
    });
  }
}
document.addEventListener("DOMContentLoaded", () => {
  renderStudents();
  attachAddStudentButtonListener();
});
export { students, renderStudents };
