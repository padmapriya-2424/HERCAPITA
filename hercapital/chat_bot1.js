function toggleChatbot() {
    const chatbotBox = document.querySelector('.chatbot-box');
    chatbotBox.classList.toggle('open');
}

function showResponse(question, response) {
    const responseContainer = document.querySelector('.chatbot-response');
    responseContainer.innerHTML = `<p><strong>${question}</strong></p><p>${response}</p>`;
}

function changeChatbotImage(newImageUrl) {
    document.querySelector('.chatbot-circle').style.backgroundImage = `url(${newImageUrl})`;
}