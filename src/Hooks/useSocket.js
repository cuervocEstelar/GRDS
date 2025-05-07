import { useEffect, useState } from 'react';

const useSocket = (socket, groupName = 'campaign-1') => {
  const [members, setMembers] = useState([]);
  const [updates, setUpdates] = useState([]);
  const [campaign, setCampaign] = useState({});

  useEffect(() => {
    if (!socket) return;

    const handleConnect = () => {
      console.log('Connected to server');
      socket.emit('join', JSON.stringify({ group: groupName }));
      requestCampaign();
    };




const requestCampaign = () => {
console.log("solicitando campaña");
socket.emit('campaign', JSON.stringify({ group: groupName }));

};

    const handleMembers = (data) => {
      console.log('members:', data);
      setMembers(data);
    };
const handleCampaign = (data) => {  
console.log("campaña recibida", data );
setCampaign(data);
}


    const handleUpdates = (data) => {
      console.log('update:', data);
      setUpdates((prev) => [...prev, data]); // acumulativo
    };

    socket.on('connect', handleConnect);
    socket.on('members', handleMembers);
    socket.on('updates', handleUpdates);
    socket.on('campaign', handleCampaign);
    socket.on('error', (error) => {
      console.log('Disconnected from server', error);

    });
    
    return () => {
      socket.off('connect', handleConnect);
      socket.off('members', handleMembers);
      socket.off('updates', handleUpdates);
      socket.off('campaign', handleCampaign);
    };
  }, [socket, groupName]);

  return { members, updates ,campaign};
};

export default useSocket;
