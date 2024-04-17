import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Gaming from './pages/Gaming';
import Tech from './pages/Tech';
import Comics from './pages/Comics';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Header from './components/Header';


function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Gaming' element={<Gaming />} />
          <Route path='/Tech' element={<Tech />} />
          <Route path='/Comics' element={<Comics />} />
          <Route path='/SignIn' element={<SignIn />} />
          <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;






{/* <>
     <h1 className="text-blue-600/75 text-8xl font-bold underline">
      Hello world!
    </h1>
    </> */}