
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';

import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login/Login';

function App() {
  return (
    <div >

    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
