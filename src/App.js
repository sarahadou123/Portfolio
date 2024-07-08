
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profil from './profil/PageProfil';

function App() {
  return (
    <Router>
      <Profil />
      <Routes>
        <Route path="/home"  />
        <Route path="/experience"  />
        <Route path="/service" />
        <Route path="/contact" />
      </Routes>
    </Router>
  );
}

export default App;

