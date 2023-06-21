import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <nav>
          <ul>
            <li>
              <Link color="white" to="/profile">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/chatRooms">Chat Rooms</Link>
            </li>
            <li>
              <Link to="/chatRooms/create">Create Chat Room</Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
