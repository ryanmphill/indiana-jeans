import { OwnJeanChoices } from "./OwnJeans.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#mainContainer")

const render = async () => {
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = await LocationTypeChoices()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
    `
}

render()