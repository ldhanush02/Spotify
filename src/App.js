import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    //Routing to Pages
    <Routes>
      <Route path="/" component={<Home />} />
    </Routes>
  );
}

export default App;