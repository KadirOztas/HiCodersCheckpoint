const students = [
  {
    title: "students",
    details: [
      { name: "Max Hermann", branch: "Fullstack", average_grade: 5.4 },
      { name: "Anthony Egbe", branch: "Cloud", average_grade: 4.9 },
    ],
  },
];

function renderStudents() {
  const dynamicContent = document.getElementById("dynamic-content")
  dynamicContent.innerHTML = `
  <h1>Students</h1>
    <div class="list-group">
     <a href="#" class="list-group-item list-group-item-action" aria-current="true">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Max Hermann</h5>
          <small>Fullstack</small>
        </div>
        <p class="mb-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <small>Average Grade: 5.4</small>
      </a>
      <a href="#" class="list-group-item list-group-item-action">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">Anthony Egbe</h5>
          <small>Cloud</small>
        </div>
        <p class="mb-1">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <small>Average Grade: 4.9</small>
      </a>
    </div>

  `;
}
export{renderStudents}