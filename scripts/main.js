import { OwnJeanChoices } from "./OwnJeans.js"
import { SaveSubmission } from "./SaveSubmission.js"
import { SubmissionList } from "./Submissions.js"
import { LocationTypeChoices } from "./UrbanDweller.js"

const container = document.querySelector("#mainContainer")

const render = async () => {
    const jeanOwnershipHTML = OwnJeanChoices()
    const locationsHTML = await LocationTypeChoices()
    const buttonHTML = await SaveSubmission()
    const submissionHTML = await SubmissionList()

    container.innerHTML = `
        ${jeanOwnershipHTML}
        ${locationsHTML}
        ${buttonHTML}
        ${submissionHTML}
    `
}

render()