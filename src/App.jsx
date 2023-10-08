
import Login from './Login';
import Home from './Home';
import Register from './Register';
import About from './About';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
    </BrowserRouter>
  )
}
export default App;