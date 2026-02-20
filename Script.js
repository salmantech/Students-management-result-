const students = [
    {
        roll: "101",
        name: "Rahul",
        s1: 85,
        s2: 78,
        s3: 92
    },
    {
        roll: "102",
        name: "Aisha",
        s1: 88,
        s2: 90,
        s3: 84
    },
    {
        roll: "103",
        name: "Arjun",
        s1: 70,
        s2: 65,
        s3: 75
    }
];

function showResult() {
    const rollInput = document.getElementById("rollInput").value;
    const resultBox = document.getElementById("resultBox");
    const error = document.getElementById("error");

    const student = students.find(s => s.roll === rollInput);

    if (!student) {
        resultBox.classList.add("hidden");
        error.textContent = "Roll number not found!";
        return;
    }

    error.textContent = "";

    const total = student.s1 + student.s2 + student.s3;
    const avg = total / 3;
    let grade;

    if (avg >= 90) grade = "A+";
    else if (avg >= 75) grade = "A";
    else if (avg >= 60) grade = "B";
    else grade = "C";

    document.getElementById("name").textContent = student.name;
    document.getElementById("roll").textContent = student.roll;
    document.getElementById("s1").textContent = student.s1;
    document.getElementById("s2").textContent = student.s2;
    document.getElementById("s3").textContent = student.s3;
    document.getElementById("total").textContent = total;
    document.getElementById("avg").textContent = avg.toFixed(2);
    document.getElementById("grade").textContent = grade;

    resultBox.classList.remove("hidden");
}
