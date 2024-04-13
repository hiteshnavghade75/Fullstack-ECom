import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import AddProduct from './pages/addProduct/AddProduct';
import ViewProduct from './pages/viewProduct/ViewProduct';
import UpdateProduct from './pages/updateProduct/UpdateProduct';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/product/add' element={<AddProduct/>}/>
          <Route path='/product/view/:id' element={<ViewProduct/>}/>
          <Route path='/product/update/:id' element={<UpdateProduct/>}/>
        </Routes>
      </Router>
      <Toaster/>
    </div>
  )
}

export default App
