

export const SubmissionList = async () => {
    // Get the submissions from your API
    const response = await fetch("http://localhost:8088/submissions")
    const submissions = await response.json()
    let html = `<h3>Submissions</h3>`
    // Iterate the submissions and create some <section> representations
    let submissionDivArray = submissions.map(
        (submission) => {
            return `<section class="submissions">
            <div class="submissions--div">Owns Jeans? ${submission.ownsBlueJeans}</div>
            <div class="submissions--div">Area type foreign key? ${submission.socioLocationId}</div>
            </section>`
        }
    )
    /* CHANGED FOR LOOP TO .MAP() ARRAY METHOD ^^^^
    for (const submission of submissions) {
        html += `<section class="submissions">
        <div class="submissions--div">Owns Jeans? ${submission.ownsBlueJeans}</div>
        <div class="submissions--div">Area type foreign key? ${submission.socioLocationId}</div>
        </section>`
    }
    */

    // Add joined submissionDivArray to html
    html += submissionDivArray.join("")

    // Return the HTML string
    return html
}