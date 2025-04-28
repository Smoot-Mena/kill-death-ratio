import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import BrowseGamers from './pages/BrowseGamers';
import FavoriteGames from './pages/FavoriteGames';
import GameNews from "./pages/GameNews";
import Profile from './pages/Profile';
import Settings from "./pages/Settings";

function App() {

  return (
    <section id='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/browse-gamers' element={<BrowseGamers />} />
        <Route path='/favorite-games' element={<FavoriteGames />} />
        <Route path='/game-news' element={<GameNews />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
      <Footer />
    </section>
  )
}

export default App;