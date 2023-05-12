import { OwnJeanChoices } from "./OwnJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#mainContainer")

const render = async () => {
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
    `
}

render()