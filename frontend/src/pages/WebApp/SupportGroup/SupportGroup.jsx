// SupportGroup.jsx

import React, { useState, useEffect, useRef } from "react";
import { Layout, Input, Button, List, Avatar, Dropdown, Menu } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import io from "socket.io-client";
import axios from "axios";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const { Content } = Layout;

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const SupportGroup = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const [pagination, setPagination] = useState({ skip: 0, limit: 8 });
  const [reachedEnd, setReachedEnd] = useState(false);
  const messagesEndRef = useRef(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [participantColorMap, setParticipantColorMap] = useState({});
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("userInfo");
    if (storedUser) {
      const { userEmail } = JSON.parse(storedUser);
      setCurrentUser(userEmail);
    } 
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    getChats();
  }, []);

  const getChats = async () => {
    try {
      const chats = await axios.get("http://localhost:4000/getChat/", {
        withCredentials: true,
      });
      setMessages(chats.data.getChats);
      setMessageCount(chats.data.getChats.length);
      const participants = chats.data.getChats.map(chat => chat.user);
      const colorMap = generateParticipantColorMap(participants);
      setParticipantColorMap(colorMap);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChat = async (values) => {
    try {
      console.log(messageCount);
      const { data } = await axios.post(
        "http://localhost:4000/saveChat",
        {
          count: messageCount, ...values, 
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        console.log("Success!", message);
      } else {
        console.log("Error with Chat");
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const generateParticipantColorMap = (participants) => {
    const colorMap = {};
    participants.forEach((participant) => {
      colorMap[participant] = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
    return colorMap;
  };

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
          const { userEmail } = JSON.parse(storedUser);
          const messageData = {
            user: userEmail,
            content: newMessage,
          };
          setMessageCount((prevCount) => prevCount + 1); 
          await axios.post("http://localhost:4000/saveChat", messageData, {
            withCredentials: true,
          });
          socket.emit("message", messageData);
          setNewMessage("");
          setMessages((prevMessages) => [...prevMessages, messageData]);
        } 
      } catch (error) {
        console.error("Error sending message to backend:", error);
      }
    }
  };

  const handleMenuClick = (e) => {
    setMenuVisible(false);
    if (e.key === "participants") {
      setShowParticipants(true);
    } else {
      setShowParticipants(false);
    }
  };

  const handleParticipantClick = (participant) => {
    console.log(participant);
  };

  const loadMoreMessages = () => {
    if (!reachedEnd) {
      setPagination((prevPagination) => ({
        skip: prevPagination.skip + prevPagination.limit,
        limit: prevPagination.limit,
      }));
    }
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="participants">
        <span>See Participants</span>
      </Menu.Item>
      <Menu.Item key="chat-portal">
        <span>See Separate Chat Portal</span>
      </Menu.Item>
      <Menu.Item key="groups">
        <span>See Joined Groups</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <WebHeader />
      <Content className="m-4 p-4 bg-carolina-blue text-black font-bold">
        <div className="max-w-md mx-auto">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Support Group</h2>
            <Dropdown
              overlay={menu}
              trigger={["click"]}
              visible={menuVisible}
              onVisibleChange={setMenuVisible}
            >
              <Button className="flex items-center">
                <HiOutlineMenuAlt3 className="mr-1" />
                Options
              </Button>
            </Dropdown>
          </div>
          {showParticipants && (
            <List
              dataSource={users}
              renderItem={(user) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: participantColorMap[user] }}>
                        {user[0]}
                      </Avatar>
                    }
                    title={user}
                    onClick={() => handleParticipantClick(user)}
                  />
                </List.Item>
              )}
            />
          )}
          <List
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(item, index) =>
              item && item.user ? (
                <List.Item className={item.user === currentUser ? "text-right" : "text-left"}>
                  <List.Item.Meta
                    avatar={
                      <Avatar style={{ backgroundColor: participantColorMap[item.user] }}>
                        {item.user[0]}
                      </Avatar>
                    }
                    title={<span style={{ fontWeight: "bold" }}>{item.user}</span>}
                    description={<span style={{ fontSize: "12px" }}>{item.content}</span>}
                    style={item.user === currentUser ? { textAlign: "right" } : { textAlign: "left" }}
                  />
                </List.Item>
              ) : null
            }
            onScroll={loadMoreMessages}
          />
          <div ref={messagesEndRef}></div>
          <div className="flex mt-4">
            <Input
              className="mr-2 text-black "
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

