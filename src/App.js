import './assets/App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          exact path='/' 
          element={<Home />}>
        </Route>
        <Route 
          exact path='/about' 
          element={<About />}>
        </Route>
        <Route 
          exact path='/contact' 
          element={<Contact />}>
        </Route>
        <Route 
          exact path='/signup' 
          element={<SignUp />}>
        </Route>
        <Route 
          exact path='/signin' 
          element={<SignIn />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
