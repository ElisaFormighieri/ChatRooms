import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/api/chat/${id}/messages`
        );
        setMessages(response.data.messages);
      } catch (error) {
        alert(error.response.data.message);
      }
    };

    fetchMessages();
  }, [id]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3333/api/chat/send', {
        message,
      });

      setMessages((prevMessages) => [...prevMessages, response.data.message]);
      setMessage('');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <div>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Container>
  );
}

export default ChatRoom;
