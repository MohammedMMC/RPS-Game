const messageElement = document.getElementById("message");
const pcomElement = document.getElementById("pcom");
const pyouElement = document.getElementById("pyou");

let pcom = 0;
let pyou = 0;

function select(s) {
    messageElement.style.display = "none";
    const PC_CHOICE = Math.floor(Math.random() * 3) + 1;
    messageElement.style.display = "block";
    messageElement.style.color = "white";
    messageElement.innerText = ".........";
    document.querySelectorAll("button").forEach(e => e.disabled = true);
    setTimeout(() => {
        const status = s === PC_CHOICE ? 3 : (s - PC_CHOICE + 3) % 3 === 1 ? 1 : 2;

        if (status === 1) {
            // WIN
            messageElement.innerText = "You won the round!";
            messageElement.style.color = "lime";
            pyou++;
        } else if (status === 2) {
            // LOOSE
            messageElement.innerText = "You lost the round!";
            messageElement.style.color = "red";
            pcom++;
        } else if (status === 3) {
            // DRAW
            messageElement.innerText = "Draw!";
            messageElement.style.color = "grey";
        }
        pcomElement.innerText = pcom;
        pyouElement.innerText = pyou;
    document.querySelectorAll("button").forEach(e => e.disabled = false);
}, 1000);
}