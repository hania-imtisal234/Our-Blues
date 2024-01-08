import React, { useState, useEffect } from "react";
import { Button, Input, List, Avatar, Modal } from "antd";
import { MessageOutlined } from "@ant-design/icons";

const AppChatBot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Ask a question", sender: "ai" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessages = [...messages, { text: inputValue, sender: "user" }];
      setMessages([...newMessages, { text: "AI Response..", sender: "ai" }]);
      setInputValue("");
    }
  };

  useEffect(() => {
    const chatList = document.getElementById("chatList");
    if (chatList) {
      chatList.scrollTop = chatList.scrollHeight;
    }
  }, [messages]);

  return (
    <Modal title="Chatbot" visible={visible} onCancel={onClose} footer={null}>
      <div className="max-h-40 overflow-y-auto">
        <List
          id="chatList"
          itemLayout="horizontal"
          dataSource={messages}
          renderItem={(msg, index) => (
            <List.Item
              className={`px-4 py-2 ${
                msg.sender === "user" ? "text-right" : ""
              }`}
              key={index}
            >
              <List.Item.Meta
                avatar={
                  msg.sender === "ai" && <Avatar icon={<MessageOutlined />} />
                }
                description={msg.text}
              />
            </List.Item>
          )}
        />
      </div>
      <div className="flex p-2">
        <Input
          className="flex-grow mr-2"
          placeholder="Type your question..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onPressEnter={handleSendMessage}
        />
        <Button type="primary" onClick={handleSendMessage}>
          Send
        </Button>
      </div>
    </Modal>
  );
};

export default AppChatBot;
