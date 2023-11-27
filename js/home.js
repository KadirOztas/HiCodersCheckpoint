import { students } from "./students.js";
import { teachers } from "./teachers.js";
import { classes } from "./classes.js";

function renderHome() {
  const dynamicContent = document.getElementById("dynamic-content");
  dynamicContent.innerHTML = `
    <div class="container">
      <h2>Welcome Mirjam</h2>
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>${students[0].details.length}</h3>
              <p>number of students</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>${teachers[0].details.length}</h3>
              <p>number of teachers</p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h3>${classes[0].details.length}</h3>
              <p>number of classes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

export { renderHome };
