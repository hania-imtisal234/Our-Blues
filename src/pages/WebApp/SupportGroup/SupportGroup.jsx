import React, { useState, useEffect, useRef } from "react";
import { Layout, Input, Button, List, Avatar, Dropdown, Menu } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";
import io from "socket.io-client";
import axios from "axios";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const { Content } = Layout;

const socket = io("http://localhost:3001", { transports: ["websocket"] });

const SupportGroup = ({ selectedGroup }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);
  const [menuVisible, setMenuVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [participantColorMap, setParticipantColorMap] = useState({});

  const generateParticipantColorMap = (participants) => {
    const colorMap = {};
    participants.forEach((participant) => {
      colorMap[participant] = "#" + Math.floor(Math.random() * 16777215).toString(16);
    });
    return colorMap;
  };

  const getChats = async () => {
    try {
      const chats = await axios.get("http://localhost:4000/getChat", {
        params: { group: selectedGroup },
        withCredentials: true,
      });
      setMessages(chats.data.getChats);
      const participants = chats.data.getChats.map(chat => chat.user);
      const colorMap = generateParticipantColorMap(participants);
      setParticipantColorMap(colorMap);
    } catch (err) {
      console.log(err);
    }
  };

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
  }, [selectedGroup]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        const storedUser = localStorage.getItem("userInfo");
        if (storedUser) {
          const { userEmail } = JSON.parse(storedUser);
          const messageData = {
            user: userEmail,
            content: newMessage,
            group: selectedGroup,
          };
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
      <Content className="m-4 p-4 bg-carolina-blue text-black font-bold flex">
        <div className="flex-1 flex flex-col bg-white p-4 shadow-lg rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Support Group: {selectedGroup}</h2>
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
          <div className="flex-1 overflow-y-auto border p-4 mb-4">
            <List
              dataSource={messages}
              renderItem={(message, index) => (
                <List.Item
                  key={index}
                  className={message.user === currentUser ? "text-right" : "text-left"}
                  style={{
                    justifyContent: message.user === currentUser ? "flex-end" : "flex-start"
                  }}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar
                        style={{ backgroundColor: participantColorMap[message.user] }}
                      >
                        {message.user.charAt(0).toUpperCase()}
                      </Avatar>
                    }
                    title={message.user}
                    description={message.content}
                    className={message.user === currentUser ? "bg-blue-100 p-2 rounded-lg" : "bg-gray-100 p-2 rounded-lg"}
                  />
                </List.Item>
              )}
            />
            <div ref={messagesEndRef} />
          </div>
          <div className="flex items-center">
            <Input
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onPressEnter={handleSendMessage}
              className="mr-2"
            />
            <Button type="primary" onClick={handleSendMessage}>
              Send
            </Button>
          </div>
        </div>
        <div className="ml-4 w-72 bg-white p-4 shadow-lg rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Groups</h2>
          <List
            dataSource={['Depression', 'Anxiety', 'Stress', 'General Support']}
            renderItem={(room, index) => (
              <List.Item key={index}>
                <List.Item.Meta
                  avatar={<Avatar>{room.charAt(0).toUpperCase()}</Avatar>}
                  title={room}
                />
              </List.Item>
            )}
          />
        </div>
      </Content>
    </Layout>
  );
};

export default SupportGroup;
