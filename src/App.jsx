import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

function App() {

  return (
    <section>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </section>
  )
}

export default App;