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
  dynamicContent.innerHTML = "";
  let teacherContent = `<h4 id="teachers-header">${teachers[0].title}</h4>`;
  teachers[0].details.slice(0, 2).forEach((teacher) => {
    teacherContent += `
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
  });
  teacherContent += `</div>`;

  dynamicContent.innerHTML = teacherContent;
}
export { teachers,renderTeachers };
