import * as libi from '/libi/lib.js';

export var chat_bot=`
  <!-- Floating chat button -->
<button id="chat-toggle-btn" aria-label="Toggle chat">💬</button>

<!-- Chatbot container -->
<div class="chatbot-container" id="chatbot">
  <div id="chat-window"></div>
  <div id="input-area">
    <input type="text" id="input-msg" placeholder="Type a message..." autocomplete="off" />
    <button id="send-btn">Send</button>
  </div>
</div>
`;

libi.get_set_tag_index_plus("body",0,chat_bot);
libi.get_set_all_class_plus("main_main",chat_bot);
//stylesheet link
var css_link=`
     <link rel="stylesheet" href="/Essentials/chatbot/chatbot.css" type="text/css" media="all" />`;

libi.get_set_tag_index_plus("head",0,css_link);



const chatWindow = document.getElementById('chat-window');
  const inputMsg = document.getElementById('input-msg');
  const sendBtn = document.getElementById('send-btn');
  const chatbot = document.getElementById('chatbot');
  const chatToggleBtn = document.getElementById('chat-toggle-btn');

  // Toggle chatbot visibility
  chatToggleBtn.addEventListener('click', () => {
    if (chatbot.style.display === 'flex') {
      chatbot.style.display = 'none';
    } else {
      chatbot.style.display = 'flex';
      inputMsg.focus();
    }
  });

  // Simple bot responses based on keywords
  function getBotResponse(message) {
  const msg = message.toLowerCase();

  if (msg.includes('hello') || msg.includes('hi')) {
    return "Hello! How can I help you today?";
  }
  if (msg.includes('how are you')) {
    return "I'm good, thanks for asking!";
  }
  if (msg.includes('bye')) {
    return "Goodbye! Have a great day!";
  }
  if (msg.includes('what is your name')) {
    return "I'm your friendly chatbot.";
  }
  if (msg.includes('hours') || msg.includes('open') || msg.includes('opening time')) {
    return "Our working hours are 9 AM to 6 PM, Monday to Friday.";
  }
  if (msg.includes('contact') || msg.includes('phone') || msg.includes('email')) {
    return "You can contact us at support@example.com or call 123-456-7890.";
  }
  if (msg.includes('help') || msg.includes('support')) {
    return "Sure, I am here to help! Feel free to ask your questions.";
  }
  if (msg.includes('pricing') || msg.includes('cost')) {
    return "Our pricing varies depending on the product or service. Please specify which one.";
  }
  if (msg.includes('location') || msg.includes('address')) {
    return "We are located at 123 Main Street, Your City.";
  }

  return "Sorry, I don't understand that yet. Could you rephrase?";
}
  // Append messages to chat
  function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `message ${className}`;
    msgDiv.textContent = text;
    chatWindow.appendChild(msgDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }

  // Send message handler
  function sendMessage() {
    const userText = inputMsg.value.trim();
    if(userText === '') return;
    appendMessage(userText, 'user-message');
    inputMsg.value = '';

    setTimeout(() => {
      const botReply = getBotResponse(userText);
      appendMessage(botReply, 'bot-message');
    }, 600);
  }

  sendBtn.addEventListener('click', sendMessage);
  inputMsg.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendMessage();
  });