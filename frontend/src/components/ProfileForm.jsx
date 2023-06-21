import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import axios from 'axios';
import Navbar from './Navbar';

function ProfileForm() {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        'http://localhost:3333/api/users/profile',
        { username },
        {
          headers: {
            Authorization: window.localStorage.getItem('app_token'),
          },
        }
      )
      .then(() => {
        alert('Profile updated successfully');
      })
      .catch((error) => {
        alert('Profile update failed', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Navbar />
      <form onSubmit={handleSubmit}>
        <TextField
          label="username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Update Profile
        </Button>
      </form>
    </Container>
  );
}

export default ProfileForm;
