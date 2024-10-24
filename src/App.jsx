import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Dashboard from './Components/Dashboard';
import Menscollection from './Components/Menscollection';
import Plain from './Components/Plain';
import Textured from './Components/Textured';
import Pure from './Components/Pure';
import Cotton from './Components/Cotton';
import Easy from './Components/Easy';
import Footer from './Components/Footer';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/mens" element={<Menscollection />} />
        <Route path="/plain" element={<Plain/>} />
        <Route path="/textured" element={<Textured/>} />
        <Route path="/pure" element={<Pure/>} />
        <Route path="/cotton" element={<Cotton/>} />
        <Route path="/easy" element={<Easy/>} />
      </Routes>
    </Router>
  );
};

export default App;
