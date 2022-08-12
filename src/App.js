
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage'

import './App.css';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route path ="/" element={<Home />} />
          <Route path ="*" element={<ErrorPage />} />
        </Routes>
       </Container>
    </Router>
  );
}

export default App;
