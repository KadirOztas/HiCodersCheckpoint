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
    dynamicContent.innerHTML = "";

    // Classes başlığını ekleyin
    const classesHeader = `<h4 id="classes-header">Classes</h4>`;
    dynamicContent.innerHTML = classesHeader;

    classes[0].details.slice(0, 2).forEach((pClass) => {
      const teacher = teachers[0].details.find(
        (teacher) => teacher.expertise === pClass.class
      );
      const classCard = `
     <div class="card" style="width: 18rem;">
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
      dynamicContent.innerHTML += classCard;
    });
  }
  export { classes, renderClasses };
