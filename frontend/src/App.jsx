import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </Router>
      <Toaster/>
    </div>
  )
}

export default App
