import React, { useState, useEffect } from "react";
import { Button, Input, List, Avatar, Modal } from "antd";
import { MessageOutlined } from "@ant-design/icons";
import axios from "axios";

const regex = /\b(self[-\s]?harm|self[-\s]?injur(y|ies)|cut(ting)?|burn(ing)?|self[-\s]?mutilat(e|ion)|self[-\s]?inflict(ed|ion)|self[-\s]?abuse|self[-\s]?destruct(ion|ive)|wrist[-\s]?cut|self[-\s]?wound|suicide|Suicide|sucide|Sucide)\b/gi;

const AppChatBot = ({ visible, onClose }) => {
  const [messages, setMessages] = useState([
    { text: "Hi, I am your virtual personal mental health assistant. How are you doing today?", sender: "ai" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const AiResponse = `
 I'm here for you, and I care deeply about your well-being. It takes courage to acknowledge and share these feelings. Please know that you are not alone in this. If you're comfortable, I encourage you to seek help from a mental health professional or a trusted person in your life.  
  Help is always available, \n
  Speak with someone today.
  Umang:
  Contact: 0311-7786264,
  Website: umang.com.pk
  
  Rozan Counseling Helpline:
  Contact: 0304 111 1741,
  Website: rozan.org
  `

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      console.log(inputValue)
      console.log(inputValue.search(regex) )
      if(inputValue.search(regex) != -1){
      const newMessages = [...messages, { text: inputValue, sender: "user" }];
      setMessages([...newMessages]);
      setMessages([...newMessages, { text: AiResponse, sender: "ai" }]);
      
      } else{
      getChatBot(inputValue)
      const newMessages = [...messages, { text: inputValue, sender: "user" }];
      setMessages([...newMessages]);
      //setMessages([...newMessages, { text: AiResponse, sender: "ai" }]);
      }
      setInputValue("");
    }
  };

  const getChatBot = async (value) => {
    try {
      console.log(value)
      const { data } = await axios.post(
        "http://localhost:4000/chatbot",
        {queryResult:{
          action:"input.unknown",
          queryText: `${value}`
        }},
        { withCredentials: false }
      );
      const  { response } = data
      const newMessages = [...messages, { text: inputValue, sender: "user" }];
      setMessages([...newMessages, { text: response, sender: "ai" }]);
    } catch (error) {
      throw new Error(error);
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
