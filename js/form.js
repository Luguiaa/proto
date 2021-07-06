let index = 0;
const render = (data) => {
  document.getElementById("main").innerHTML = `
        <h2>${data[index].question}</h2>
        <ul>
          <li>
            <a onclick="form(1)">${data[index].firstImage}</a>
            <p>${data[index].firstAlt}</p>
          </li>
          <li>
            <a onclick="form(2)">${data[index].secondImage}</a>
            <p>${data[index].secondAlt}</p>
          </li>
        </ul>
  `;
};

const form = (option) => {
  fetch("/api/answers.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (option === 2 && index === 1) {
        window.open("/store");
      }
      render(data);
      index++;
    });
};

form(0);
