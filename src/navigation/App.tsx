import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
// Components
import MainPage from '../pages/MainPage';
import PersonPage from '../pages/PersonPage';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainPage/>}  />
        <Route path="/person" element={<PersonPage/>} />
      </Routes>
  );
}

export default App;
