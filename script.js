function startQuiz() {
    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let section = document.getElementById("section").value;

    if (!name) return alert("Please enter your Name!");
    if (!roll) return alert("Please enter your Roll Number!");
    if (!section) return alert("Please enter your Section!");
    if (!/^\d{1,10}$/.test(roll)) return alert("Roll No. must be max 13 digits!");

    alert("Quiz Started!");
}
