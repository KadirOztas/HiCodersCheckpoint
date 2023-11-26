// students.js
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
  dynamicContent.innerHTML = ""; // Clear existing content

  // Create the student cards
  students[0].details.forEach((student) => {
    const studentCard = `
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p class="card-text">Details about ${student.branch} specialization.</p>
        </div>
      </div>
    `;
    dynamicContent.innerHTML += studentCard; // Add the card to dynamicContent
  });
}

export { renderStudents };
