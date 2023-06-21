import { Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import ProfileForm from './components/ProfileForm';
import ChatRoomList from './components/ChatRoomList';
import CreateChatRoomForm from './components/CreateChatRoomForm';

import ChatRoom from './components/ChatRoom';

function App() {
  return (
    <Routes>
      <Route index element={<LoginForm />} />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/chatRooms" element={<ChatRoomList />} />
      <Route path="/chatRooms/create" element={<CreateChatRoomForm />} />
      <Route path="/chatRooms/:id" element={<ChatRoom />} />
      <Route path="/profile" element={<ProfileForm />} />
    </Routes>
  );
}

export default App;
