import './index.css';
import Header from './components/Header';
import Container from './components/Container';

import Index from './pages/Index';
import Servers from './pages/Servers';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div style={{ minWidth: "100vw", minHeight: "100vh" }} className="bg-orange-200">
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route exact path='/' element={<Index/>}></Route>
            <Route exact path='/servers' element={<Servers/>}></Route>
            <Route exact path='/login' element={<Login/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
