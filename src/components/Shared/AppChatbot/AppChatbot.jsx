import React, { useState, useEffect } from 'react';
import { Button, Input, List, Avatar } from 'antd';
import { MessageOutlined } from '@ant-design/icons'; 

const AppChatBot = () => {
  const [messages, setMessages] = useState([{ text: 'Ask a question', sender: 'ai' }]);
  const [inputValue, setInputValue] = useState('');
  const [minimized, setMinimized] = useState(true);

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessages = [...messages, { text: inputValue, sender: 'user' }];
      setMessages([...newMessages, { text: 'AI Response..', sender: 'ai' }]);
      setInputValue('');
    }
  };
  useEffect(() => {
    if (!minimized) {
      const chatList = document.getElementById('chatList');
      if (chatList) {
        chatList.scrollTop = chatList.scrollHeight;
      }
    }
  }, [messages, minimized]);
  return (
    <div className={"fixed bottom-11 right-2 w-80 bg-transparent text-black font-bold overflow-hidden ${minimized ? 'minimized' : ''}"}>Your Chatbot
      {!minimized && (
        <>
          <List
            id="chatList"
            className="max-h-40 overflow-y-auto"
            itemLayout="horizontal"
            dataSource={messages}
            renderItem={(msg, index) => (
              <List.Item className={`px-4 py-2 ${msg.sender === 'user' ? 'text-right' : ''}`} key={index}>
                <List.Item.Meta avatar={msg.sender === 'ai'} description={msg.text}/>
              </List.Item>
            )}
          />
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
        </>
      )}
      <div className="minimize-button" onClick={() => setMinimized(!minimized)}>
        {minimized ? <MessageOutlined /> : '-'}
      </div>
    </div>
  );
};

export default AppChatBot;
