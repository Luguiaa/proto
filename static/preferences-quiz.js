let stage = 0,
preferences = {
    assistedShopping: false,
    artProducts: false,
    cholesterol: false,
    interestedInCoffee: false,
},
title = document.querySelector("#title"),
info = document.querySelector("#info"),
yesButton = document.querySelector("#yes"),
noButton = document.querySelector("#no");

const err = _ => {
    document.querySelector("#anchors").style.display = "none";
    title.innerHTML = "Ocurrió un error en el servidor."
    info.innerHTML = "Intenta refrescando la página."
}

const processData = async _ => {
    fetch("/api/receiveInterestData", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(preferences)
    })
    .then(res => res.json())
    .then(res => {
        if(res.success !== true) {
            err();
            return;
        }
        console.log("success");
    })
    .catch(_ => err);
}

const quiz = _ => {
    console.log(preferences)
    switch(stage) {
        case 0:
            title.innerHTML = "¿Deseas habilitar la compra asistida?";
            info.innerHTML = "La compra asistida utiliza Inteligencia Artificial para recomendarte productos";

            noButton.onclick = _ => { window.location.href = "/store" }
            yesButton.onclick = _ => { preferences.assistedShopping = true; stage++; quiz(); }
        break;
        case 1:
            title.innerHTML = "¿Te interesan los productos elaborados artesanalmente?";
            info.innerHTML = "Estos datos serán utilizados para recomendarte productos nuevos";

            noButton.onclick = _ => { stage++; quiz(); }
            yesButton.onclick = _ => { preferences.artProducts = true; stage++; quiz(); }
        break;
        case 2:
            title.innerHTML = "¿Tienes problemas de colesterol o presión alta?";
            info.style.color = "red";
            info.innerHTML = "Este paso es importante para no recomendarte productos dañinos.";

            noButton.onclick = _ => { stage++; quiz(); }
            yesButton.onclick = _ => { preferences.cholesterol = true; stage++; quiz(); }
        break;
        case 3:
            title.innerHTML = "¿Te gusta el café?";
            info.style.color = "#222222";
            info.innerHTML = "";

            noButton.onclick = processData;
            yesButton.onclick = processData;
        break;
    }
}

window.onload = quiz();