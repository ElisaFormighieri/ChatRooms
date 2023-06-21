import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import Navbar from './Navbar';

function CreateChatRoomForm() {
  const [chatRoomName, setChatRoomName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:3333/api/chatRooms',
        {
          name: chatRoomName,
        },
        {
          headers: {
            Authorization: window.localStorage.getItem('app_token'),
          },
        }
      );
      alert('Chat created');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container maxWidth="sm">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <TextField
          label="Chat Room Name"
          variant="outlined"
          fullWidth
          value={chatRoomName}
          onChange={(e) => setChatRoomName(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Create Chat Room
        </Button>
      </form>
    </Container>
  );
}

export default CreateChatRoomForm;
