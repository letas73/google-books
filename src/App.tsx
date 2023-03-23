import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Book from './pages/Book/Book';
import './base.scss'

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Book />} />
      </Routes>
    </div>
  );
}

export default App;