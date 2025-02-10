import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
import { originals,horror,action,Comedy,Documentary } from './Urls';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
function App() {

  return (
    <div className='App'>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={
            <>
             <Banner  />
                <RowPost url={originals} title="Netflix Originals" />
                <RowPost url={horror} title="Horror" isSmall />
                <RowPost url={action} title="Action" isSmall />
                <RowPost url={Comedy} title="Comedy" isSmall />
                <RowPost url={Documentary} title="Documentaries" isSmall />
            </>
          }/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
