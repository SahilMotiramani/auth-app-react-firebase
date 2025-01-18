import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import ChangePassword from './ChangePassword';
import ForgotPassword from './ForgotPassword';
import About from './About';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/fp" element={<ForgotPassword/>} />
      <Route path="/cp" element={<ChangePassword/>} />
      <Route path="*" element={<Login/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
