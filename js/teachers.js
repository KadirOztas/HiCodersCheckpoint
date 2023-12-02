const teachers = [
  {
    title: "Teachers",
    details: [
      { name: "Hannes Bühler", expertise: "Fullstack" },
      { name: "Ali Sayar", expertise: "Cloud" },
      { name: "Cristian Monedero", expertise: "AWS" },
      { name: "Léonce Blanchet", expertise: "Javascript" },
      { name: "Giuseppina Lori", expertise: "Java" },
    ],
  },
];

function renderTeachers() {
  const dynamicContent = document.getElementById("dynamic-content");
  // Clean up content for testing
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
      <div class="card" style="width: 18rem;">
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
  htmlContent += `<button type="button" id="add-teacher-button" class="btn btn-light btn-lg" data-bs-toggle="modal" data-bs-target="#addClassModal">
  <i class="bi bi-plus-circle"></i>
</button>
<p>Add new ${teachers[0].title}</p>`;
  htmlContent += `</div>`;
  dynamicContent.innerHTML = htmlContent;
}

export { teachers, renderTeachers };
