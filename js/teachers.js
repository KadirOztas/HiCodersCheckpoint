const teachers = [
  {
    title: "teachers",
    details: [
      { name: "Hannes Bühler", expertise: "Javascript" },
      { name: "Ali Sayar", expertise: "AWS" },
    ],
  },
];
function renderTeachers() {
  const dynamicContent = document.getElementById("dynamic-content")
  // Just fot test i am gonna clean the content
  dynamicContent.innerHTML = ""
  let teacherContent = `<h1>${teachers[0].title}h1><div class="teacher-header"`;
  teachers[0].details.forEach((teacher) => {
    content += `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${teacher.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${teacher.expertise}</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="card-link">Students</a>
          <a href="#" class="card-link">Classes</a>
        </div>
      </div>`
  }
  )
  content += `</div>`;

  dynamicContent.innerHTML=content
}
export{renderTeachers}