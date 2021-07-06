export default function card(container, position) {
  fetch("/products.json")
    .then((res) => res.json())
    .then((products) => {
      document.querySelector(container).insertAdjacentHTML(
        "beforeend",
        `
    <div class="card" style="width: 18rem; margin: 15px;">
        <img src="${products[position].img}" class="card-img-top" alt="${products[position].alt}">
        <div class="card-body">
            <h5 class="card-title">${products[position].title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${products[position].subtitle}</h6>
            <p class="card-text">${products[position].description}</p>
            <a href="${products[position].url}" class="card-link">Comprar</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
      );
    });
};
