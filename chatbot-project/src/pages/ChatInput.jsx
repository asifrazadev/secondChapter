import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

function ChatInput({ messages, setMessages }) {
  const [userInput, setUserInput] = useState("");

  function getUserInput(event) {
    setUserInput(event.target.value);
  }

  function sendMessageOnEnter(event) {
    if (event.key === "Enter") {
      setMessagesFromUser();
    } else if (event.key === "Escape") {
      setUserInput("");
    }
  }

  function setMessagesFromUser() {
    if (!userInput) return;

    const newMessages = [
      ...messages,
      {
        message: userInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    const response = Chatbot.getResponse(userInput);

    setMessages([
      ...newMessages,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setUserInput("");
  }

  return (
    <div className="header">
      <input
        type="text"
        placeholder="Send a message to Chatbot"
        className="chatInputField"
        value={userInput}
        onChange={getUserInput}
        onKeyDown={sendMessageOnEnter}
      />
      <button className="sendButton" onClick={setMessagesFromUser}>
        Send
      </button>
    </div>
  );
}

export default ChatInput;
