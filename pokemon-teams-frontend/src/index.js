const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`
const main = document.querySelector("main"
)

document.addEventListener("DOMContentLoaded", () => loadTrainers())

const loadTrainers = () => {
    fetch(TRAINERS_URL)
    .then(res => res.json())
    .then(json => {
        json.forEach(trainer => renderTrainer(trainer))
      })

}
const renderTrainer = (trainerHash) => {
   const div = document.createElement("div")
   const p = document.createElement("p")
   const button = document.createElement("button")
   const ul = document.createElement("ul")

   div.setAttribute("class", "card")
   div.setAttribute("data-id", trainerHash.id)
   p.innerHTML = trainerHash.name
   button.setAttribute("data-trainer-id", trainerHash.id)
   button.innerHTML = "Add Pokemon"
   button.addEventListener("click", createPokemon)



   div.appendChild(p)
   div.appendChild(button)
   div.appendChild(ul)

   main.appendChild(div)
   trainerHash.pokemons.forEach(pokemon => renderPokemon(pokemon))
}

const renderPokemon = (pokemon) => {
   const ul = document.querySelector(`div[data-id="${pokemon.trainer_id}"]`)
   const li = document.createElement("li")
   const button = document.createElement("button")

   li.innerHTML = `${pokemon.nickname} (${pokemon.species})`
   button.setAttribute("class", "release")
   button.setAttribute("data-pokemon-id", pokemon.id)
   button.innerHTML = "Release"
   button.addEventListener("click", deletePokemon)
   //attach even listener to button (click)

   li.appendChild(button)
   ul.appendChild(li)
}

const createPokemon = () => {

}

const deletePokemon = () => {

}
