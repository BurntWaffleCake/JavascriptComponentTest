console.log("initializing article component");

let components = document.getElementsByTagName("article");
for (let component of components) {
  let parameters = component.dataset;
  component.innerHTML = `
        <h1>${parameters.header}</h1>
        <p>This component should be easily repeatable. This article contains parameters such as body1 which results in ${parameters.body1}!</p>
        <sub_article></sub_article>
    `;
}
