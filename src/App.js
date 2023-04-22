import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar';
import Podcast from './components/Podcast/Podcast';
function App() {
  return (
    <Routes>
      <Route path="/" component={<Home />} />
      <Route path="/Podcast" component={<Podcast />} />
    </Routes>
  );
}

export default App;
