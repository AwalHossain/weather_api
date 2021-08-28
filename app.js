const input = document.getElementById('input')
const searchInput = document.getElementById('search')
const city = document.getElementById('city');
const temp = document.getElementById('temp')

searchInput.addEventListener('click', ()=>{
    console.log(true);
    const searchText =input.value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=0f07d92f1cf71d48ef65e730d73f86d3`)
    .then(response => response.json())
    .then(data => showTemp(data))
})

const showTemp = (data) =>{
    const kelvin = data.main.temp;
    const celsius = parseInt(kelvin - 273.15);
    console.log(celsius);
    city.innerText = data.name;
    temp.innerText = celsius;
}