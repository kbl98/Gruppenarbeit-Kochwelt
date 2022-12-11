"use strict"

let recipe = [
    {
        "name": "Kartoffeln",
        "size": 250,
        "unit": "g",
    },
    {
        "name": "Zwiebeln",
        "size": 25,
        "unit": "g",
    },
    {
        "name": "Buttermilch",
        "size": 50,
        "unit": "ml",
    },
    {
        "name": "Salz",
        "size": null,
        "unit": "Prise",
    },
    {
        "name": "Butterschmalz",
        "size": 0.5,
        "unit": "EL",
    },    
    {
        "name": "Pfeffer",
        "size": null,
        "unit": "Prise",
    }
];

let portionSize = +document.querySelector("#portionInputField").value;
let ingredientsList = document.querySelector("#ingredientsList");
let btn = document.querySelector("button");

let load = document.addEventListener("DOMContentLoaded", () => {
    includeHTML()
    for (let i = 0; i < recipe.length; i++) {
        ingredientsList.innerHTML += htmlTemplate(i)
    }
})

btn.addEventListener("click", () => {
    ingredientsList.innerHTML = ``
    for (let i = 0; i < recipe.length; i++) {
        ingredientsList.innerHTML += htmlTemplate(i)
    }
})

const htmlTemplate = i => {
    portionSize = +document.querySelector("#portionInputField").value
    return recipe[i]["size"] === null ? `
    <li>eine ${recipe[i]["unit"]} ${recipe[i]["name"]}</li>
    ` : `
    <li>${recipe[i]["size"] * portionSize} ${recipe[i]["unit"]} ${recipe[i]["name"]}</li>
    `
}


