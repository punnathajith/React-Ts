import { UserContextProvider } from './context/UserContext'; 
import Login from './Login';
import Details from './Details';
import './App.css';

function App() {
  return (
    <UserContextProvider> 
      <Login />
      <Details/>
    </UserContextProvider>
  );
}

export default App;
