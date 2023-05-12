import { setSocioLocationId } from "./TransientState.js"


 /*
     Define the callback function for an event listener that targets a 'change' 
     when the user chooses a location

     Since the value of the radio buttons is the string of
     integers, you must convert the
     string to an actual integer with parseInt() as seen below
 */
     const handleLocationChange = (changeEvent) => {
        if (changeEvent.target.name === "location") {
            const convertedToInteger = parseInt(changeEvent.target.value)
            setSocioLocationId(convertedToInteger)
        }
    }

/*Export a function that invokes the event listener, fetches location data from api,
  and builds the HTML for the location buttons */
export const LocationTypeChoices = async () => {

    document.addEventListener("change", handleLocationChange)

    const response = await fetch("http://localhost:8088/socioLocations")
    const locations = await response.json()

    let choicesHTML = `<h2>Which type of area do you live in?</h2>`
    for (const location of locations) {
        choicesHTML += `<input type='radio' name='location' value='${location.id}' /> ${location.label}`
    }
    
    return choicesHTML
}