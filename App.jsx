import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import './App.css'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Gaming from './pages/Gaming';
import Tech from './pages/Tech';
import Comics from './pages/Comics';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './components/PrivateRoute';
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute';
import CreatePost from './pages/CreatePost';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/gaming' element={<Gaming />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/comics' element={<Comics />} />
          
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route  element={<PrivateRoute />} />
            <Route path='/dashboard' element={<Dashboard />} />
          <Route/>
          <Route  element={<OnlyAdminPrivateRoute />} />
            <Route path='/create-post' element={<CreatePost />} />
          <Route/>


      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App;