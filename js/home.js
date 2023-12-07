import { teachers, classes, students } from "./data.js";
import { promptWithModal } from "./modal.js";
function askUserName() {
  promptWithModal(
    "Enter Your Name",
    [{ id: "user-name", label: "Name", type: "text" }],
    (userName) => {
      if (userName) {
        localStorage.setItem("userName", userName);
        renderHome();
      }
    }
  );
}
function renderHome() {
  const userName = localStorage.getItem("userName") || "Guest";
  const dynamicContent = document.getElementById("dynamic-content");
  if (!dynamicContent) return;

  const welcomeMessageElement = document.getElementById("welcome-message");
  if (welcomeMessageElement) {
    if (userName !== "Guest") {
      welcomeMessageElement.innerText = `Welcome, ${userName}`;
    } else {
      welcomeMessageElement.innerText = "";
    }
  }
  dynamicContent.innerHTML = `
    <div class="main-container mt-5 mb-4 mx-5">
      <div class="name-text pb-5">
        <h2 id="welcome-message">Welcome, ${userName}</h2>
      </div>
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-md-4"><div class="card text-center"><div class="card-body"><h3>${students[0].details.length}</h3><p>number of students</p></div></div></div>
          <div class="col-md-4"><div class="card text-center"><div class="card-body"><h3>${teachers[0].details.length}</h3><p>number of teachers</p></div></div></div>
          <div class="col-md-4"><div class="card text-center"><div class="card-body"><h3>${classes[0].details.length}</h3><p>number of classes</p></div></div></div>
        </div>
      </div>
    </div>
  `;
  if (userName === "Guest") {
    dynamicContent.style.display = 'none';
  } else {
    dynamicContent.style.display = 'block';
  }
}
document.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("userName")) {
    askUserName();
  } else {
    renderHome();
  }
});
export { renderHome };
