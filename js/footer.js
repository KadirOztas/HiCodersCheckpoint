const renderFooter = () => {
  const app = document.getElementById("app");
  const footerDiv = document.createElement("footer");
  footerDiv.classList.add("footer", "bg-secondary", "py-3");

  footerDiv.innerHTML = `
    <div class="container">
      <div class="row">
        <div class="col d-flex">
          <a href="#!" class="nav-link text-dark">About us</a>
          <a href="#!" class="nav-link text-dark">Contact</a>
        </div>
      </div>
    </div>
  `;
  app.appendChild(footerDiv);
};

export { renderFooter };
