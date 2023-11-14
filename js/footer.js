const renderFooter = () => {
    const app = document.getElementById("app");
    app.innerHTML += `
    <div class= "footer">
    <span id="about us">About Us</span>
    <span id="contact">Contact</span>
    </div>

    `;
}

renderFooter()
export{renderFooter}
