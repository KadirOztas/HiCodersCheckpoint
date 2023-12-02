import { teachers } from "./teachers.js";
const classes = [
  {
    title: "Classes",
    details: [
      { class: "Fullstack" },
      { class: "Cloud" },
      { class: "AWS" },
      { class: "Javascript" },
      { class: "Java" },
    ],
  },
];

function renderClasses() {
  const dynamicContent = document.getElementById("dynamic-content");

  let htmlContent = `<div class="fluid-container">`;

  const classesHeader = `<div class="row m-4">
  <div class="col-xl-10">
    <h4 id="classes-header">${classes[0].title}</h4>
  </div>
</div>`;
  htmlContent += classesHeader;

  htmlContent += `<div class="row px-5 d-flex justify-content-center align-item-center">`;

  classes[0].details.forEach((pClass) => {
    const teacher = teachers[0].details.find(
      (teacher) => teacher.expertise === pClass.class
    );
    const classCard = `
    <div class="card col-xl-5 m-2" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${pClass.class} Class</h5>
        <h6 class="card-subtitle mb-2 text-muted">${
          teacher ? teacher.name : "No teacher found"
        }</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="card-link" onclick="window.renderStudents()">Students</a>
        <a href="#" class="card-link" onclick="window.renderTeachers()">Teachers</a>
      </div>
    </div>
  `;
    htmlContent += classCard;
  });

  htmlContent += `</div>`;
  htmlContent += `<div class="d-flex flex-column align-items-center">
  <button type="button" id="add-class-button" class="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#addClassModal">
    <i class="bi bi-plus-circle"></i>
  </button>
  <p>Add new ${classes[0].title}</p>
</div>`;
  htmlContent += `</div>`;
  dynamicContent.innerHTML = htmlContent;
}
function addNewClass(className) {
  const teacherIndex = classes[0].details.length % teachers[0].details.length;
  const teacher = teachers[0].details[teacherIndex].name;
  classes[0].details.push({
    class: className,
    teacher: teacher,
  });
  renderClasses();
}
document.addEventListener("DOMContentLoaded", () => {
  renderClasses();
  const addButton = document.querySelector("#add-class-button");
  if (addButton) {
    addButton.addEventListener("click", () => {
      const className = prompt("Please enter the new class name:");
      if (className) {
        addNewClass(className);
      }
    });
  }
});
export { classes, renderClasses };
