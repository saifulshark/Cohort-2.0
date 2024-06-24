import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from './components/signup';
import { Signin } from './components/signin';
import { User } from './components/user';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/signup"} element={<Signup />} />
        <Route path={"/signin"} element={<Signin />} />
        <Route path={"/user"} element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App