const renderNav = () => {
    const app = document.getElementById("app");
    app.innerHTML = "";
    app.innerHTML += `
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LMS</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Classes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Teachers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Students</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div id="dynamic-content"></div>
// That is for dynamic content
    `;
}
export{renderNav}