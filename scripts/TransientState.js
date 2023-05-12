// Set up the transient state data structure and provide initial valuess
const transientState = {
    "ownsBlueJeans": false,
    "socioLocationId": 0
}


// Functions to modify each property of transient state
export const setOwnsBlueJeans = (chosenOwnership) => {
    transientState.ownsBlueJeans = chosenOwnership
    console.log(transientState)
}

export const setSocioLocationId = (chosenLocation) => {
    transientState.socioLocationId = chosenLocation
    console.log(transientState)
}

// Function to convert transient state to permanent state
export const saveSurveySubmission = async () => {

    // Specify that we want to post data to the api
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState) // Turn the data into a string
    }
    // 
    const response = await fetch("http://localhost:8088/submissions", postOptions) //Add data to api

    /////////CUSTOM EVENT ////////////////////////////////////////////////////////
    /* Create a custom event for when a new submission is posted */
    const customEvent = new CustomEvent("newSubmissionCreated")
    document.dispatchEvent(customEvent) // Activate or 'dispatch' the event (say the event has happened)
}