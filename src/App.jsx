import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router';
import Election from './pages/election';
import RootLayout from './pages/rootLayout';
import Error from './pages/error';
import Login from './pages/login';
import Register from './pages/register';
import Result from './pages/result';
import ElectionDetails from './pages/electionDetails';
import Candidate from './pages/candidates';
import Congrats from './pages/congrats';
import LogOut from './pages/logOut';
import { elections as dummyElection } from './data';
import { useState } from 'react';


// export default App

function App() {

 
  return (
    <Routes>
      <Route path='elections' element={<Election />} />
      <Route path='register' element={<Register />} />
      <Route path='/' element={<Login />} />
      <Route path='results' element={<Result />} />
      <Route path='*' element={<Error />} />
      <Route path='election/:id' element={<ElectionDetails />} />
      <Route path='elections/:id/candidates' element={<Candidate />} />
    </Routes>
    
  )
}

export default App
