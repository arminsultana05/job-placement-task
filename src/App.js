
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';

import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login/Login';
import RequireAuth from './Component/Pages/Login/RequireAuth';
import Signup from './Component/Pages/Login/Signup';
import MyTask from './Component/Pages/MyTask';
import UserItems from './Component/Pages/UserItems/UserItems';

function App() {
  return (
    <div >

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>

      </Routes>
    </div>
  );
}

export default App;
