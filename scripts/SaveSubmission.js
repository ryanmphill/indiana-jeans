import { saveSurveySubmission } from "./TransientState.js"


const handleSurveySubmissionClick = (clickEvent) => {
    if (clickEvent.target.id === "saveSubmission") {
        
        saveSurveySubmission()
    }
}

/* Export a function that invokes the event listener and builds the HTML */
export const SaveSubmission = () => {

    document.addEventListener("click", handleSurveySubmissionClick)

    return `<div><button id='saveSubmission'>Save Sumbission</button></div>`
}