const container = document.querySelector(".countries-container");

async function fetchCountry() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
}

function renderCountries(countries) {
  countries.forEach((country) => {
    const li = document.createElement("li");
    li.style.width = "250px";

    const title = document.createElement("h3");
    title.textContent = country.name.common;
    title.style.textAlign = "center";
    title.style.paddingTop = "10px";
    li.append(title);

    const img = document.createElement("img");
    img.src = country.flags.png;
    img.style.width = "250px";
    img.style.height = "250px";
    img.style.padding = "8px";
    img.style.borderRadius = "50%";
    li.append(img);

    container.append(li);
  });
}

fetchCountry().then(renderCountries);
