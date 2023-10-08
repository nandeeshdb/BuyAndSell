import SingIn from './SingIn';
import SignUp from './SignUp';
import About from './About';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <BrowserRouter>
    <Header />

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<SingIn/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />

    </Routes>
    </BrowserRouter>
  )
}
export default App;