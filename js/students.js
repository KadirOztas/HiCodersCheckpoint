const students = [
  {
    title: "Students",
    details: [
      { name: "Max Hermann", branch: "Fullstack", average_grade: 5.4 },
      { name: "Anthony Egbe", branch: "Cloud", average_grade: 4.9 },
    ],
  },
];

function renderStudents() {
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = `<p class="students-header">${students[0].title}</p>`;

  students[0].details.forEach((student) => {
    const studentCard = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <h6 class="card-subtitle mb-2 text-muted">${student.branch}</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </p>
           <p class="average-text">
            ${student.average_grade}
          </p>
        </div>
      </div>`;
    dynamicContent.innerHTML += studentCard;
  });
}
export { renderStudents };




