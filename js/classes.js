import { teachers, classes } from "./data.js";
import { addModal, createCard, promptWithModal } from "./modal.js";
function renderClasses() {
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = "";
  const classesHeader = `<div class="row m-4">
        <div class="col-xl-10">
            <h4 id="classes-header">${classes[0].title}</h4>
        </div>
    </div>`;
  let htmlContent = `<div class="fluid-container">`;
  htmlContent += classesHeader;
  htmlContent += `<div class="row px-5 d-flex justify-content-center align-items-center">`;
  classes[0].details.forEach((pClass) => {
    const teacher = teachers[0].details.find(
      (t) => t.expertise === pClass.class
    );
    htmlContent += createCard(
      `${pClass.class} Class`,
      teacher ? teacher.name : "No teacher found",
      "Some quick example text to build on the class title and make up the bulk of the class's content.",
      `<a href="#" class="card-link card-link-students" onclick="window.renderStudents()">Students</a>`,
      `<a href="#" class="card-link card-link-teachers" onclick="window.renderTeachers()">Teachers</a>`
    );
  });

  htmlContent += `</div>`;
  htmlContent += `
    <div class="d-flex flex-column align-items-center">
        <button type="button" id="add-class-button" class="btn btn-light btn-lg">
            <i class="bi bi-plus-circle"></i> Add new ${classes[0].title}
        </button>
    </div>
  </div>`;
  dynamicContent.innerHTML = htmlContent;
  attachAddButtonListener();
}
function addNewClass(className) {
  const availableTeacher = findAvailableTeacher(className);
  if (!availableTeacher) {
    addModal(
      "No Teacher Available",
      `There isn't any teacher available for the class ${className}. Please add teacher first then try again`,
      null,
      renderClasses
    );
  } else {
    const existingClass = classes[0].details.find((c) => c.class === className);
    if (existingClass) {
      addModal(
        "Class Already Exists",
        `The class ${className} already exists.`,
        null,
        renderClasses
      );
    } else {
      classes[0].details.push({
        class: className,
        teacher: availableTeacher.name,
      });
      localStorage.setItem("classes", JSON.stringify(classes));
      addModal(
        "Class Added",
        `New class ${className} added successfully.`,
        null,
        renderClasses
      );
    }
  }
}
function findAvailableTeacher(className) {
  const assignedTeachers = new Set(classes[0].details.map((c) => c.teacher));
  const availableTeachers = teachers[0].details.filter(
    (t) => t.expertise === className && !assignedTeachers.has(t.name)
  );
  return availableTeachers.length > 0 ? availableTeachers[0] : null;
}
function attachAddButtonListener() {
  const addButton = document.getElementById("add-class-button");
  if (addButton) {
    addButton.onclick = () => {
      if (teachers[0].details.length === 0) {
        addModal(
          "No Teacher",
          `There isn't any teacher available for the class ${className}. Please add teacher first then try again.`,
          null,
          renderClasses
        );
      } else {
        promptWithModal(
          "Enter New Class Name",
          [{ id: "class-name", label: "Class Name", type: "text" }],
          (className) => {
            addNewClass(className);
          }
        );
      }
    };
  }
}
function attachLinkEventListeners() {
  const studentLinks = document.querySelectorAll(".card-link-students");
  studentLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("students-page").click();
    });
  });
  const classLinks = document.querySelectorAll(".card-link-teachers");
  classLinks.forEach((link) => {
    link.addEventListener("click", function () {
      document.getElementById("classes-link").click();
    });
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderClasses();
  attachLinkEventListeners();
  attachAddButtonListener();
});
export { renderClasses };
