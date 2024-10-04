document.getElementById("gradeForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const marks = parseInt(document.getElementById("marks").value);
    let grade = "";
    let passStatus = "";

    if (marks >= 90 && marks <= 100) {
        grade = "A+";
        passStatus = "Passed";
    } else if (marks >= 80 && marks < 90) {
        grade = "A";
        passStatus = "Passed";
    } else if (marks >= 70 && marks < 80) {
        grade = "B+";
        passStatus = "Passed";
    } else if (marks >= 60 && marks < 70) {
        grade = "B";
        passStatus = "Passed";
    } else if (marks >= 50 && marks < 60) {
        grade = "C+";
        passStatus = "Passed";
    } else if (marks >= 40 && marks < 50) {
        grade = "C";
        passStatus = "Passed";
    } else if (marks >= 30 && marks < 40) {
        grade = "D+";
        passStatus = "Passed";
    } else if (marks >= 20 && marks < 30) {
        grade = "D";
        passStatus = "Failed";
    } else if (marks < 20) {
        grade = "E";
        passStatus = "Failed";
    } else {
        grade = "Invalid";
        passStatus = "Invalid marks";
    }

   
    document.getElementById("result").innerHTML = 
        `Grade: ${grade}<br>${passStatus}`;
});
