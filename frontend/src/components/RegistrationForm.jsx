import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function RegistrationForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3333/api/auth/register', {
        username,
        password,
      });
      navigate('/');
      alert('Success');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" marginTop="30%" align="center" gutterBottom>
        Registration Form
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        component="form"
        onSubmit={handleSubmit}>
        <TextField
          required
          label="Username"
          variant="outlined"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="normal"
        />
        <TextField
          required
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="normal"
        />
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Register
        </Button>
        <Box sx={{ mt: 2 }}>
          <Link to="/">
            <Typography>I already have an account </Typography>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
