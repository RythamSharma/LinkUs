import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
function App() {
  return (
    <Router>
    {/* <Navbar />
    <Alert/> */}
    <Routes>
      <Route path="/signup" element={<Signup />} />
    </Routes>
  </Router>
  );
}

export default App;
