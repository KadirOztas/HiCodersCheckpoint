  const classes = [
    {
      title: "Classes",
      details: [{ class: "Fullstack" }, { class: "Cloud" }],
    },
  ];

  function renderClasses() {
    const dynamicContent = document.getElementById("dynamic-content");
    dynamicContent.innerHTML = "";

    classes[0].details.forEach((item) => {
      const classCard = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">${item.class} Class</h5>
            <p class="card-text">Details about ${item.class} class.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
      `;
      dynamicContent.innerHTML += classCard;
    });
  }

  export { classes,renderClasses };
