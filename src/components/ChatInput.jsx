import { useState } from "react";
import { Chatbot } from "supersimpledev";
import './ChatInput.css'

export function ChatInput({ chatMessages, setChatMessages }) {
  const [inputText, setInputText] = useState("");
  function saveInputText(event) {
    setInputText(event.target.value);
  }
  function clearMessages() {
    setChatMessages([]);
    localStorage.setItem('messages', JSON.stringify([]));
  }
  function sendMessage() {
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
        timestamp: new Date().toLocaleTimeString([], {
            hour:'2-digit',
            minute:'2-digit',
          }),
      },
    ];

    // Define messagesWithLoading BEFORE using it
    const loadingId = crypto.randomUUID();
    const messagesWithLoading = [
      ...newChatMessages,
      {
        message: "loading",
        sender: "robot",
        id: loadingId,
        isLoading: true,
      },
    ];

    setChatMessages(messagesWithLoading);

    setTimeout(() => {
      const response = Chatbot.getResponse(inputText);
      setChatMessages([
        ...newChatMessages,
        {
          message: response,
          sender: "robot",
          id: crypto.randomUUID(),
          timestamp: new Date().toLocaleTimeString([], {
            hour:'2-digit',
            minute:'2-digit',
          }),
        },
      ]);
    }, 1500);

    setInputText("");
  }
  return (
    // <input></input> = <input />
    <div className="chat-input-container">
      <input
        placeholder="Send a message to chatbot"
        className="chat-input"
        size="30"
        onChange={saveInputText}
        value={inputText}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          } else if (event.key === "Escape") {
            setInputText("");
          }
        }}
      />
      <button onClick={sendMessage} className="send-button">
        send
      </button>
      <button onClick={clearMessages} className="clear-button">
        Clear
      </button>
    </div>
  );
}