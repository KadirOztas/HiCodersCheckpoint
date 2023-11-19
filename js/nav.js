import { showStudents } from "./students.js";

import { showStudents } from "./students.js";

const renderNav = () => {
    const app = document.getElementById("app");
    const navDiv = document.createElement("div")
    app.appendChild(navDiv);
    navDiv.id="nav-div"
    navDiv.innerHTML += `
    <button id="home">Home</button>
    <button id="classes">Classes</button>
    <button id="teachers">Teachers</button>
    <button id="students">Students</button>
    `;
}
renderNav()
export{renderNav}