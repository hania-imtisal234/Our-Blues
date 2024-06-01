import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import GroupSelection from '../GroupSelection/GroupSelection';

const GroupChat = () => {
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  if (selectedGroup) {
    return <Navigate to={`/group/${selectedGroup}`} />;
  }

  return <GroupSelection onGroupSelect={handleGroupSelect} />;
};

export default GroupChat;
