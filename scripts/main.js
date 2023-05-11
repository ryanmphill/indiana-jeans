import { OwnJeanChoices } from "./OwnJeans.js"

const container = document.querySelector("#mainContainer")

const render = () => {
    const jeanOwnershipHTML = OwnJeanChoices()

    container.innerHTML = jeanOwnershipHTML
}

render()