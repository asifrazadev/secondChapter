import { useState, useEffect, useRef } from "react";
import ChatInput from "./pages/ChatInput";
import ChatMessages from "./pages/ChatMessages";

function App() {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    const container = chatContainerRef.current;
    if (container.scrollHeight > container.clientHeight) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      <div className="chatMessages" ref={chatContainerRef}>
        {messages.map((msg) => (
          <ChatMessages
            key={msg.id}
            message={msg.message}
            sender={msg.sender}
          />
        ))}
        <div ref={bottomRef}></div>
      </div>

      <ChatInput messages={messages} setMessages={setMessages} />
    </>
  );
}

export default App;
