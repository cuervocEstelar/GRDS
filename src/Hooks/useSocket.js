import { useEffect, useState } from 'react';

const useSocket = (socket, groupName = 'campaign-1') => {
  const [members, setMembers] = useState([]);
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    if (!socket) return;

    const handleConnect = () => {
      console.log('Connected to server');
      socket.emit('join', JSON.stringify({ group: groupName }));
    };

    const handleMembers = (data) => {
      console.log('members:', data);
      setMembers(data);
    };

    const handleUpdates = (data) => {
      console.log('update:', data);
      setUpdates((prev) => [...prev, data]); // acumulativo
    };

    socket.on('connect', handleConnect);
    socket.on('members', handleMembers);
    socket.on('updates', handleUpdates);

    return () => {
      socket.off('connect', handleConnect);
      socket.off('members', handleMembers);
      socket.off('updates', handleUpdates);
    };
  }, [socket, groupName]);

  return { members, updates };
};

export default useSocket;
