import { students } from "./students.js";
import { teachers } from "./teachers.js";
import { classes } from "./classes.js";

function renderHome() {
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = `
  <div class="main-container mt-5 mb-4">
  <div class="name-text pb-5">
      <h2>Welcome Mirjam</h2>
    </div>  
  <div class="container my-5">
      <div class="row justify-content-center">
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h3>${students[0].details.length}</h3>
              <p>number of students</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h3>${teachers[0].details.length}</h3>
              <p>number of teachers</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <div class="card-body">
              <h3>${classes[0].details.length}</h3>
              <p>number of classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  `;
}

export { renderHome };
