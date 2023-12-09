import { students } from "./data.js";
import { createCard, deleteItem, addModal, promptWithModal } from "./modal.js";
import {
  validateAndFormatNameSurname,
  nameSurnameRegex,
  openModalWithValidation,
  examValidation,
  isExamScoreValid,
} from "./main.js";
function renderStudents() {
  let dynamicContent = document.getElementById("dynamic-content");
  if (!dynamicContent) {
    dynamicContent = document.createElement("div");
    dynamicContent.id = "dynamic-content";
    document.body.appendChild(dynamicContent);
  }
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
    const averageGrade = calculateAverageGrade(student.exam_1, student.exam_2);
    const averageGradeText = `Average Grade: ${averageGrade}`;
    htmlContent += createCard(
      student.name,
      student.branch,
      averageGradeText,
      ""
    );
  });
  htmlContent += `</div>
    <div class="d-flex flex-column align-items-center mb-5 mt-5">
      <button type="button" id="add-student-button" class="btn btn-light btn-lg">
        <i class="bi bi-plus-circle"></i> Add new Student
      </button>
    </div>
  </div>`;
  dynamicContent.innerHTML = htmlContent;
  attachAddStudentButtonListener();
  deleteButon();
}
document.addEventListener("DOMContentLoaded", () => {
  renderStudents();
});
function addNewStudent(name, branch, exam1, exam2) {
  const score1 = parseFloat(exam1);
  const score2 = parseFloat(exam2);
  const newStudent = {
    name,
    branch,
    exam_1: score1,
    exam_2: score2,
  };
  students[0].details.push(newStudent);
  localStorage.setItem("students", JSON.stringify(students));
  addModal(
    "Student Added",
    `New student ${name} added successfully to the ${branch} branch with.`,
    null,
    renderStudents
  );
}
function attachAddStudentButtonListener() {
  const addStudentButton = document.getElementById("add-student-button");
  if (addStudentButton) {
    addStudentButton.addEventListener("click", openAddStudentModal);
  }
}
function openAddStudentModal() {
  openModalWithValidation(
    "Add New Student",
    [
      { id: "student-name", label: "Name", type: "text" },
      { id: "student-branch", label: "Branch", type: "text" },
      {
        id: "student-exam1",
        label: "First Exam Score",
        type: "number",
        min: "0",
        max: "6",
        step: "0.1",
      },
      {
        id: "student-exam2",
        label: "Second Exam Score",
        type: "number",
        min: "0",
        max: "6",
        step: "0.1",
      },
    ],
    (name, branch, exam1, exam2) => {
      const validatedName = validateAndFormatNameSurname(name, "");
      const validatedBranch = validateAndFormatNameSurname(branch, "");
      if (
        validatedName &&
        validatedBranch &&
        isExamScoreValid(exam1) &&
        isExamScoreValid(exam2)
      ) {
        addNewStudent(validatedName.name, validatedBranch.name, exam1, exam2);
      } else {
        addModal(
          "Invalid Input",
          "Please check your input. Make sure the name is correctly formatted and the exam scores are valid.",
          openAddStudentModal
        );
      }
    },
    [
      {
        field: "student-name",
        regex: nameSurnameRegex,
        errorMessage:
          "Name must be in 'John Doe' format and cannot contain numbers.",
      },
      {
        field: "student-branch",
        regex: nameSurnameRegex,
        errorMessage: "Branch must only contain letters and spaces.",
      },
      {
        field: "student-exam1",
        regex: examValidation.regex,
        errorMessage: examValidation.errorMessage,
      },
      {
        field: "student-exam2",
        regex: examValidation.regex,
        errorMessage: examValidation.errorMessage,
      },
    ]
  );
}
function calculateAverageGrade(exam1, exam2) {
  const average = (parseFloat(exam1) + parseFloat(exam2)) / 2;
  return average.toFixed(1);
}
function deleteButon() {
  document.querySelectorAll(".delete-btn").forEach((button, index) => {
    button.addEventListener("click", function () {
      deleteItem(index, students[0].details, renderStudents, "students");
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderStudents();
  attachAddStudentButtonListener();
});
export { renderStudents };
