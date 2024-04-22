let button = document.querySelector("#new-joke");
let output = document.querySelector("#output");
async function hello() {
  try {
    let result = await fetch(
      "https://v2.jokeapi.dev/joke/Programming?type=single"
    );
    let data = await result.json();
    output.innerText += data.joke + "\n";
    // console.log(data);
  } catch (e) {
    console.log(e);
  }
}

button.addEventListener("click", (e) => {
  hello();
});
