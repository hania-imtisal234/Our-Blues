import React, { useState, useEffect } from "react";
import { Layout, Input, Button, List, Avatar, Empty } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import io from "socket.io-client";
import { useCookies } from "react-cookie";
import axios from "axios";


let count
const { Content } = Layout;

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const SupportGroup = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  
  const [cookies, removeCookie] = useCookies([]);
  const [lastName, setUsername] = useState("");

      const getChats = async () => {
      try {
        const chats = await axios.get(
          "http://localhost:4000/getChat/",
          { withCredentials: true },
        )
        for (let i in chats.data.getChats){
          const messageData = { user: chats.data.getChats[i].user, content: chats.data.getChats[i].content };
          setMessages((prevMessages) => [...prevMessages, messageData]);
          count = i
        }
        count++
      } catch (err){
        console.log(err)
      }
    }

    const handleChat = async (values) => {
    try {
      console.log(count)
      const { data } = await axios.post(
        "http://localhost:4000/saveChat",
        {
          count, ...values,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        console.log("Success!", message)
      } else {
        console.log("Error with Chat")
      }
    } catch (error) {
      throw new Error(error);
    }
  };


  useEffect(() => {

    const user = prompt("Enter your name:");
    setCurrentUser(user);

    socket.on("message", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
    getChats()
    return () => {
      socket.connect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      const messageData = { user: currentUser, content: newMessage };
      handleChat(messageData)
      count++
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
