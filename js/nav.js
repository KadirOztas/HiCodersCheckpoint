const renderNav = () => {
  const app = document.getElementById("app");
  app.innerHTML = `
     <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand">LMS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" href="#" id="home-link">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="classes-link">Classes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="teachers-page">Teachers</a> 
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="students-page">Students</a> 
            </li>
          </ul>
          <a class="nav-link ms-auto" href="#" id="profile-page">
            <i class="fas fa-user"></i>
          </a>
        </div>
      </div>
    </nav>
    <div id="dynamic-content"></div>
  `;
};
function setActivePage(pageId) {
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.id === `${pageId}-page`) {
      link.classList.add("active");
    }
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  setActivePage("home");
});
export { renderNav };
