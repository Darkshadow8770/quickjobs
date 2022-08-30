import './App.css';
import './SignUp.css';
import { Routes, Route} from "react-router-dom";

//import components
import Menu from './templates/Menu';
import Jobs from './templates/Jobs';
import Home from './templates/Home';
import SignIn from './templates/SignIn';
import SignUp from './templates/SignUp';
import Erreur from './templates/Erreur';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/Jobs" element={ <Jobs/> } />
        <Route path="/SignIn" element={ <SignIn/> } />
        <Route path="/SignUp" element={ <SignUp/> } />
        <Route path='*' element={ <Erreur/> }/>
      </Routes>
    </div>
  );
}
export default App;