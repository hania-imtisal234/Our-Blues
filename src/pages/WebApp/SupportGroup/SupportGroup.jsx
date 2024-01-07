import React, { useState } from "react";
import { Layout, Input, Button, List, Avatar, Empty } from "antd";
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";

const { Content } = Layout;
const SupportGroup = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { user: "You", content: newMessage }]);
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
                <List.Item className={item.user === "You" ? "text-right" : "text-left"}>
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
