import React, { useState } from "react";
import axios from "axios"; // ✅ Import axios
import "./Chatbot.css"; // ✅ Your CSS file

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await axios.post("/chat", { message: input });
      const botResponse = response.data.response;

      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
    } catch (error) {
      console.error("Error connecting to server:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Server error. Try again later." }
      ]);
    }

    setInput("");
  };

  return (
    <div className="chat-container">
      <h2>Recommender Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
