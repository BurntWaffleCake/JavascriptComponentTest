console.log("initializing article sub component");

let components = document.getElementsByTagName("sub_article");
for (let component of components) {
  component.innerHTML = `
        <p>This is a sub component!</p>
    `;
}
