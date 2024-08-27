function toggleChatbot() {
    const chatbotBox = document.querySelector('.chatbot-box');
    const chatbotDot = document.querySelector('.chatbot-dot');
    chatbotBox.classList.toggle('open');
    if (chatbotBox.classList.contains('open')) {
        chatbotDot.style.display = 'none'; // Hide dot when chatbot is opened
    } else {
        chatbotDot.style.display = 'block'; // Show dot when chatbot is closed
    }
}

function showResponse(question, response) {
    const responseContainer = document.querySelector('.chatbot-response');
    responseContainer.innerHTML = `<p><strong>${question}</strong></p><p>${response}</p>`;
}

function changeChatbotImage(newImageUrl) {
    document.querySelector('.chatbot-circle').style.backgroundImage = `url(${newImageUrl})`;
}