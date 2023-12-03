const renderFooter = () => {
  const app = document.getElementById("app");
  app.classList.add("d-flex", "flex-column");
  app.style.minHeight = "100vh";
  app.style.overflow = "hidden";
  const footerHTML = `
      <div id="text-div" class="mt-auto" style="max-width: 100%;">
        <div class="row text-container py-5 border-top border-gray">
          <div class="container ps-5">
            <p class="fw-bold">HiCoder 23/24 LMS</p>
            <p>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
        <footer class="footer bg-secondary py-3">
          <div class="container">
            <div class="row">
              <div class="col d-flex">
                <a href="#!" class="nav-link text-dark mx-3">About us</a>
                <a href="#!" class="nav-link text-dark">Contact</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    `;

  app.innerHTML += footerHTML;
};
export { renderFooter };
