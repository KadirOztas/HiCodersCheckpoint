const students = JSON.parse(localStorage.getItem("students")) || [
  {
    title: "Students",
    details: [
      { name: "Max Hermann", branch: "Fullstack", average_grade: 5.4 },
      { name: "Anthony Egbe", branch: "Cloud", average_grade: 4.9 },
      { name: "Mia Williams", branch: "Cloud", average_grade: 2.7 },
      { name: "Olivia Johnson", branch: "Cloud", average_grade: 4.5 },
      { name: "Amelia Anderson", branch: "AWS", average_grade: 4.2 },
      { name: "William Rodriguez", branch: "Cloud", average_grade: 3.5 },
      { name: "Emma Smith", branch: "Javascript", average_grade: 2.9 },
      { name: "Sophia Lopez", branch: "Java", average_grade: 4.7 },
      { name: "Elijah Jackson", branch: "AWS", average_grade: 3.5 },
      { name: "Harper Martinez", branch: "Fullstack", average_grade: 2.7 },
      { name: "Henry Garcia", branch: "Fullstack", average_grade: 4.5 },
      { name: "Olivia Rodriguez", branch: "Cloud", average_grade: 3.6 },
      { name: "Ava Martin", branch: "Fullstack", average_grade: 2.8 },
      { name: "Henry Davis", branch: "Cloud", average_grade: 4.0 },
      { name: "Lucas Garcia", branch: "Java", average_grade: 2.9 },
      { name: "Elijah Taylor", branch: "Cloud", average_grade: 3.5 },
      { name: "Amelia Moore", branch: "Javascript", average_grade: 2.9 },
      { name: "Amelia Williams", branch: "AWS", average_grade: 3.8 },
      { name: "Olivia Anderson", branch: "Java", average_grade: 2.6 },
      { name: "William Wilson", branch: "Java", average_grade: 3.7 },
      { name: "Alexander Hernandez", branch: "AWS", average_grade: 2.5 },
      { name: "Olivia Miller", branch: "Java", average_grade: 3.9 },
    ],
  },
];

function renderStudents() {
  const dynamicContent = document.getElementById("dynamic-content");
  let htmlContent = `<div class="fluid-container-student">`
    const studentsHeader= `
    <div class="row m-4">
      <div class="col-xl-10">
        <h4 id="students-header">${students[0].title}</h4>
      </div>
    </div>
    `
  htmlContent += studentsHeader
        htmlContent+=`<div class="row px-5 d-flex justify-content-center align-items-center">`;
  students[0].details.forEach((student) => {
    htmlContent += `
      <div class="card col-xl-5 m-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${student.branch}</h6>
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
