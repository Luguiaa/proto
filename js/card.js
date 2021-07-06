const card = (container, products) => {
  document.querySelector(container).insertAdjacentHTML(
    "beforeend",
    `
    <div class="card" style="width: 18rem; margin: 15px;">
        <img src="${products[index].img}" class="card-img-top" alt="${products[index].alt}">
        <div class="card-body">
            <h5 class="card-title">${products[index].title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${products[index].subtitle}</h6>
            <p class="card-text">${products[index].description}</p>
            <a href="${products[index].url}" class="card-link">Comprar</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
  );
};

card("main")
card("main")
card("main")
card("main")
card("main")
card("main")
card("main")
card("main")