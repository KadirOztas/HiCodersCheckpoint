import { teachers } from "./data.js";
import { classes } from "./data.js";
import { addModal } from "./modal.js";

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
  htmlContent += `<div class="row px-5 d-flex justify-content-center align-item-center">`;

  classes[0].details.forEach((pClass) => {
    const teacher = teachers[0].details.find(
      (t) => t.expertise === pClass.class
    );
    htmlContent += `
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
      `There isn't any teacher available for the class ${className}.`,
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
  console.log("Add button:", addButton);

  if (addButton) {
    addButton.onclick = () => {
      if (teachers[0].details.length === 0) {
        addModal(
          "No Teacher",
          `There isn't any teacher who has this ${teachers[0].details.expertise}`
        );
      } else {
        promptWithModal("Enter New Class Name", (className) => {
          if (className) {
            addNewClass(className);
          }
        });
      }
    };
    console.log("Event listener attached to add button");
  } else {
    console.error("Add button not found");
  }
}
function promptWithModal(title, callbackOnConfirm) {
  const modalBody = `<input type="text" id="modal-input" class="form-control" placeholder="${title}">`;
  addModal(
    title,
    modalBody,
    () => {
      const inputValue = document.getElementById("modal-input").value;
      if (inputValue.trim()) {
        callbackOnConfirm(inputValue.trim());
      }
    },
    () => {}
  );
}
document.addEventListener("DOMContentLoaded", renderClasses);
export { classes, renderClasses };
