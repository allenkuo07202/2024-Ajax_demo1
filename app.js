let myKey = "11eb20771a1f64879b6ff924e7b9af5c";
let city = "Taipei";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`;

async function weather() {
  try {
    let result = await fetch(url);
    let data = await result.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

weather();
