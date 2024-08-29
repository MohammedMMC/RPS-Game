const messageElement = document.getElementById("message");

function select(s) {
    messageElement.style.display = "none";
    const PC_CHOICE = Math.floor(Math.random() * 3) + 1;
    messageElement.style.display = "block";
    messageElement.innerText = ".........";
    setTimeout(() => {
        messageElement.innerText = s === PC_CHOICE ? "Draw!" ;
    });
}