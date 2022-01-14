const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const bookWrapper = document.querySelector(".book-wrapper");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const titulo = inputs[0].value;
    const autor = inputs[1].value;
    const publi = Number(inputs[2].value);
    const capa = inputs[3].value;
    const isbn = inputs[4].value;
    const preco = Number(inputs[5].value);

    const tituloTag = document.createElement("h2");
    const autorTag = document.createElement("h3");
    const publiTag = document.createElement("h3");
    const capaTag = document.createElement("img");
    const isbnTag = document.createElement("h3");
    const precoTag = document.createElement("h3");

    capaTag.setAttribute("src", capa);

    tituloTag.innerHTML = `Titulo: ${titulo}`;
    autorTag.innerHTML = autor;
    publiTag.innerHTML = publi;
    isbnTag.innerHTML = isbn;
    precoTag.innerHTML = preco;

    bookWrapper.appendChild(tituloTag);
    bookWrapper.appendChild(autorTag);
    bookWrapper.appendChild(publiTag);
    bookWrapper.appendChild(capaTag);
    bookWrapper.appendChild(isbnTag);
    bookWrapper.appendChild(precoTag);

    setTimeout(() => prompt("Hello"), 1000);
});