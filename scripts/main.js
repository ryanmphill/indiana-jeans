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
////////// LISTEN FOR THE CUSTOM EVENT ////////////////////////////////////////////
/* When a new submission is posted, the event listener will take notice. Because 
the function 'render' is passed in as an argument, all of the dynamically generated
html will run again and be sent to the browser with the newest data from the API.
We are 'listening' for a new submission to be 'dispatched', and then we are 
re-rendering all of the HTML content. This results in the user having the submission
content automatically refreshed after posting */////////////////////////////////////
document.addEventListener("newSubmissionCreated", render) //////////////////////////
////////////////////////////////////////////////////////////////////////////////////

// Initially invoke the 'render' function
render()