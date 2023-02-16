let searchbtn = document.getElementById("serach-btn");
let searchInp = document.getElementById("country-inp");

searchbtn.addEventListener("click", () => {
    let input = searchInp.value;
    let finalURL = `https://restcountries.com/v3.1/name/${input}?fullText=true`;
    fetch(finalURL).then((response) => response.json()).then((data) => {
        console.log(data);
        console.log(data[0].capital);
        console.log(data[0].name.common);
        console.log(data[0].continents);
        console.log(data[0].flags.svg);
        console.log(data[0].timezones);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));

        result.innerHTML = `
        <img src="${data[0].flags.svg}" class="img-flag">
        <h2>${data[0].name.common}</h2>
        
        <div class="wrapper">
        
        <div class=wrapper-ele>
        <h4>Capital:</h4>
        <span>${data[0].capital}</span>
        </div>

        <div class=wrapper-ele>
        <h4>Continents: </h4>
        <span>${data[0].continents}</span>
        </div>

        <div class=wrapper-ele>
        <h4>TimeZone:</h4>
        <span>${data[0].timezones}</span>
        </div>

        <div class=wrapper-ele>
        <h4>Currencies: </h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
        </div>

        <div class=wrapper-ele>
        <h4>Languages: </h4>
        <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
        </div>


        </div>
        
        `



    });


})