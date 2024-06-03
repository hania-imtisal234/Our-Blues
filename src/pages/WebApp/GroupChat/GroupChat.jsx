import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import GroupSelection from '../GroupSelection/GroupSelection';
import SupportGroup from '../SupportGroup/SupportGroup';

const GroupChat = () => {
  const [selectedGroup, setSelectedGroup] = useState('');

  const handleGroupSelect = (group) => {
    setSelectedGroup(group);
  };

  if (selectedGroup) {
    return <SupportGroup selectedGroup={selectedGroup} />;
  }

  return <GroupSelection onGroupSelect={handleGroupSelect} />;
};

export default GroupChat;
