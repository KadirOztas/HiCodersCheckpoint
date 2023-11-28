const renderFooter = () => {
  const app = document.getElementById("app");

  const textDiv = document.createElement("div");
  textDiv.classList.add("text-container", "py-3");
  textDiv.innerHTML = `
    <div class="container no-padding">
    <p class="fw-bold">HiCoder 23/24 LMS</p>
    <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
  </div>
  `;

  const footerDiv = document.createElement("footer");
  footerDiv.classList.add("footer", "bg-secondary", "py-3");
  footerDiv.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col d-flex justify-content-between">
          <a href="#!" class="nav-link text-dark">About us</a>
          <a href="#!" class="nav-link text-dark">Contact</a>
        </div>
      </div>
    </div>
  `;

  app.appendChild(textDiv);
  app.appendChild(footerDiv);
};

export { renderFooter };
