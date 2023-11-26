const renderFooter = () => {
    const app = document.getElementById("app");
    const footerDiv = document.createElement("div")
    app.appendChild(footerDiv)
    footerDiv.innerHTML += `
    <div id= "footer">
    <span id="about us">About Us</span>
    <span id="contact">Contact</span>
    </div>

    `;
}

renderFooter()
export{renderFooter}
