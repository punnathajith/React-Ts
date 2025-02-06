import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import { Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/product/:id' element={<Product/>}/>
      </Routes>
    </>
  )
}

export default App
