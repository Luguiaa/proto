const func = async _ => {
  await fetch("/api/answers.json")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

const formItems = func();

let index = 0;

const form = (option) => {
  console.log("hola");
  if (option === 2 && index === 1) {
    window.open("/store");
  }
  document.querySelector("main").innerHTML = `
  <h2>${formItems[index].question}</h2>
  <ul>
    <li>
      <a onclick="form(1)">${formItems[index].firstImage}</a>
      <p>${formItems[index].firstAlt}</p>
    </li>
    <li>
      <a onclick="form(2)">${formItems[index].secondImage}</a>
      <p>${formItems[index].secondAlt}</p>
    </li>
  </ul>
  `;
  index++;
};

form(0);
