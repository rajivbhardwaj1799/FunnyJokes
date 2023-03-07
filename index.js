const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apikey = "9ype1nspcSFD3zu6w+MHNg==ga7TJG08ZUqB87Hz"

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

    async function getJoke(){

try {
    jokeEl.innerText = "Updating...";
    btnEl.disabled = true;
    btnEl.innerText = "Loading...";
    const response = await fetch(apiURL, options)
    const data = await response.json();
    
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";

    jokeEl.innerText = data[0].joke;
} catch (error) {
    jokeEl.innerText = "An error occure, try again later";
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(error);
}
    }
btnEl.addEventListener("click", getJoke)