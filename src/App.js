import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Podcast from './components/Podcast/Podcast';
function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/podcast" component={Podcast} />
    </Routes>
  );
}

export default App;
