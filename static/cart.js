const options = {
  headers: {
    "x-Authorization": "pk_test_29874f362ea46d7b066b056cc5782f8419dacd9842b54",
  },
};

fetch(`https://api.chec.io/v1/carts}`, options)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("body").insertAdjacentHTML(
      "beforeend",
      `
      <div class="text-center" style="margin: 20px;">
          <img src="${data.media.source}" class="img-fluid" style="max-height: 500px;" alt="...">
          <h2>${data.name} - ${data.price.formatted_with_code}</h2>
      </div>
      `
    );
  });
