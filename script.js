
function generateInputs() {
    let count = document.getElementById("subjectCount").value;
    let container = document.getElementById("marksContainer");
    container.innerHTML = "";

    if (count <= 0) {
        alert("Enter valid subject number");
        return;
    }

    for (let i = 1; i <= count; i++) {
        container.innerHTML += `
            <div class="subject-row">
                <input type="number" placeholder="Max Mark ${i}" class="max">
                <input type="number" placeholder="Mark Obtained ${i}" class="obtained">
            </div>
        `;
    }
}

function calculateResult() {
    let name = document.getElementById("name").value;
    let maxMarks = document.querySelectorAll(".max");
    let obtainedMarks = document.querySelectorAll(".obtained");

    let totalMax = 0;
    let totalObtained = 0;

    for (let i = 0; i < maxMarks.length; i++) {
        totalMax += Number(maxMarks[i].value);
        totalObtained += Number(obtainedMarks[i].value);
    }

    let percentage = (totalObtained / totalMax) * 100;
    let average = totalObtained / maxMarks.length;

    let grade = "";

    if (percentage >= 90) grade = "A+";
    else if (percentage >= 80) grade = "A";
    else if (percentage >= 70) grade = "B";
    else if (percentage >= 60) grade = "C";
    else if (percentage >= 50) grade = "D";
    else grade = "F";

    document.getElementById("resultBox").innerHTML = `
        <h3>Result</h3>
        Name: ${name} <br>
        Total Marks: ${totalObtained} / ${totalMax} <br>
        Average: ${average.toFixed(2)} <br>
        Percentage: ${percentage.toFixed(2)}% <br>
        Grade: <b>${grade}</b>
    `;
}
