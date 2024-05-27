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


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Comics' element={<Comics />} />
          <Route  element={<PrivateRoute />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}

export default App;