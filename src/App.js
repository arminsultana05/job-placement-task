
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header';

import Home from './Component/Pages/Home';
import Login from './Component/Pages/Login/Login';
import UserItems from './Component/Pages/UserItems/UserItems';

function App() {
  return (
    <div >

    <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='user' element={<UserItems></UserItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
