const form = document.querySelector("#info")
const email = document.querySelector("#email")
const emailHelp = document.querySelector("#emailHelp")
const name = document.querySelector("#name")
const nameHelp = document.querySelector("#nameHelp")
const texto = document.querySelector("#texto")
const textoHelp = document.querySelector ("#textoHelp")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (email.value === "" || name.value === "" || texto.value === "") {
        if (email.value === "") {
            emailHelp.innerText = "Por favor, completar esta información"
        }
        if (name.value === "") {
            nameHelp.innerText = "Por favor, completar esta información"
        }
        if (texto.value === "") {
            textoHelp.innerText = "Por favor, completar esta información"
        }
    } else {
        form.submit();
    }
})