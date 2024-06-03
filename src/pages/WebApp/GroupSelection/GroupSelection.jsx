import React, { useState } from 'react';
import { Layout, Button, Card, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import WebHeader from "../../../components/WebApp/WebHeader/WebHeader";

const { Content } = Layout;
const { Title, Text } = Typography;

const groups = [
  { name: 'Depression', icon: <CheckCircleOutlined /> },
  { name: 'Anxiety', icon: <CheckCircleOutlined /> },
  { name: 'Stress', icon: <CheckCircleOutlined /> },
  { name: 'General Support', icon: <CheckCircleOutlined /> }
];

const GroupSelection = ({ onGroupSelect }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);

  const handleSelect = (group) => {
    console.log("Selected group:", group); 
    setSelectedGroup(group);
    onGroupSelect(group);
  };

  return (
    <Layout>
      <WebHeader />
      <Content className="flex justify-center items-center min-h-screen bg-carolina-blue text-black">
        <Card className="shadow-lg rounded-lg" style={{ maxWidth: 600, padding: '40px 20px', textAlign: 'center' }}>
          <Title level={2} className="mb-4">Select a Support Group</Title>
          <div className="flex justify-around mb-6">
            {groups.map((group) => (
              <div key={group.name} className="text-center">
                <Button
                  type="text"
                  icon={group.icon}
                  size="large"
                  className={`flex flex-col items-center ${selectedGroup === group.name ? 'text-blue-500' : 'text-gray-400'}`}
                  onClick={() => handleSelect(group.name)}
                >
                  {group.icon}
                  <Text>{group.name}</Text>
                </Button>
              </div>
            ))}
          </div>
          <Button
            type="primary"
            block
            size="large"
            className="mt-4"
            onClick={() => selectedGroup && onGroupSelect(selectedGroup)}
          >
            Next Step
          </Button>
        </Card>
      </Content>
    </Layout>
  );
};

export default GroupSelection;
