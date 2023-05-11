import { OwnJeanChoices } from "./OwnJeans.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#mainContainer")

const render = () => {
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = LocationTypeChoices()

    container.innerHTML = jeanOwnershipHTML
}

render()