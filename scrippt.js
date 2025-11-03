// Simple message sending simulation
document.querySelector(".send-btn").addEventListener("click", sendMessage);
document.querySelector(".chat-footer input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendMessage() {
    const input = document.querySelector(".chat-footer input");
    const messageText = input.value.trim();
    if (!messageText) return;

    const chatBody = document.querySelector(".chat-body");
    const message = document.createElement("div");
    message.classList.add("message", "sent");
    message.textContent = messageText;

    chatBody.appendChild(message);
    input.value = "";

    chatBody.scrollTop = chatBody.scrollHeight;
}
