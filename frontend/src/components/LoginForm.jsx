import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:3333/api/auth/login',
        {
          username,
          password,
        }
      );
      console.log(response.data.message);

      localStorage.setItem('app_token', response.data.token);

      navigate('/chatRooms');
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <form onSubmit={handleSubmit}>
          <Typography
            display="flex"
            flexDirection="column"
            alignItems="center"
            marginBottom="20px"
            marginTop="20%"
            component="h1"
            variant="h5">
            Sign in
          </Typography>

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
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
        </form>
        <Link to="/register">Create account</Link>
      </Box>
    </Container>
  );
}

export default LoginForm;
