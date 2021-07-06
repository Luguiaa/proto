/**

    Toltekatl DOM Handler

        @author Ulises Viña Almeida <contacto@ulisesvina.me>
        @author Juan Almanza <scidroid@scidroid.me>
        @version 0.2

    This version and prior are for prototype-only use and should be treated as such.

**/

window.onload = async _ => {
    document.head.innerHTML += "<link rel='stylesheet' href='/css/bootstrap.min.css'>\n<script src='/js/bootstrap.min.js'></script>\n<script src='/js/tensorflow.min.js'></script>";

    const componentsToLoad = document.querySelectorAll("component");

    for(let i = 0; i !== componentsToLoad.length; i++) {
        const thisComponent = componentsToLoad[componentsToLoad.length-1-i],
        componentToLoad = thisComponent.getAttribute("name"),
        componentContent = await fetch(`/components/${componentToLoad}.html`)
        .then(response => response.text())
        .then(text => {return text});

        thisComponent.parentElement.insertAdjacentHTML("afterbegin", componentContent);
    }
}