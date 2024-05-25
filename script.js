const correctCode = "DEINCODE123"; // Ersetze dies mit dem korrekten Code

function checkCode() {
    const userCode = document.getElementById('codeInput').value;
    const messageElement = document.getElementById('message');

    if (userCode === correctCode) {
        messageElement.textContent = "Herzlichen Glückwunsch! Du hast ein Fußballticket gewonnen!";
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Leider ist das nicht der richtige Code. Versuche es erneut.";
        messageElement.style.color = "red";
    }
}