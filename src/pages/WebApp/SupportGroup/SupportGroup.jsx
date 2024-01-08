import React, { useState, useEffect } from "react";
import { Layout, Input, Button, List, Avatar, Empty } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import io from "socket.io-client";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const { Content } = Layout;

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const SupportGroup = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  
  const [cookies, removeCookie] = useCookies([]);
  const [lastName, setUsername] = useState("");

  useEffect(() => {

    

    const user = prompt("Enter your name:");
    setCurrentUser(user);

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.connect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageData = { user: currentUser, content: newMessage };
      setMessages((prevMessages) => [...prevMessages, messageData]); 
      socket.emit("message", messageData);
      setNewMessage("");
    }
  };

  return (
    <Layout>
      <WebHeader />
      <Content className="m-4 p-4 bg-carolina-blue text-black font-bold">
        <div className="max-w-md mx-auto">
          {messages.length === 0 ? (
            <Empty
              imageStyle={{
                height: 100,
              }}
              description={<span>Welcome to the support group!</span>}
            />
          ) : (
            <List
              itemLayout="horizontal"
              dataSource={messages}
              renderItem={(item) => (
                <List.Item className={item.user === currentUser ? "text-right" : "text-left"}>
                  <List.Item.Meta
                    avatar={<Avatar>{item.user[0]}</Avatar>}
                    title={item.user}
                    description={item.content}
                  />
                </List.Item>
              )}
            />
          )}
          <div className="flex mt-4">
            <Input
              className="mr-2 text-black"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default SupportGroup;
