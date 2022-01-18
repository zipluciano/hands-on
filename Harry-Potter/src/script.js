import { url } from "../src/constants/constants.js";

const getData = async url => {
  const response = await fetch(url).then(res => res.json());

  for (let i = 0; i < response.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper");

    const img = document.createElement("img");
    img.setAttribute("src", response[i].image);
    img.setAttribute("alt", `${response[i].name} image`);

    const info = document.createElement("div");
    info.setAttribute("class", "info");
    info.insertAdjacentHTML("beforeend", `<h3>${response[i].name}</h3>`);
    info.insertAdjacentHTML(
      "beforeend",
      `<h4>House: ${response[i].house}</h4>`
    );
    info.insertAdjacentHTML(
      "beforeend",
      `<p>Age: ${2022 - response[i].yearOfBirth}</p>`
    );

    wrapper.appendChild(img);
    wrapper.appendChild(info);
    document.body.appendChild(wrapper);
  }
};

getData(url);
