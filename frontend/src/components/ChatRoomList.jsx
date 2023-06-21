import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Container from '@mui/material/Container';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function ChatRoomList() {
  const [chatRooms, setChatRooms] = useState([]);
  console.log(chatRooms);

  const fetchChatRooms = async () => {
    try {
      const response = await axios.get('http://localhost:3333/api/chatRooms', {
        headers: {
          Authorization: window.localStorage.getItem('app_token'),
        },
      });

      setChatRooms(response?.data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchChatRooms();
  }, []);

  return (
    <Container maxWidth="sm">
      <Navbar />
      <List>
        {chatRooms?.map((chatRoom) => (
          <div key={chatRoom?._id}>
            <Link to={`${chatRoom?._id}`}>{chatRoom?.name}</Link>
          </div>
        ))}
      </List>
    </Container>
  );
}

export default ChatRoomList;
