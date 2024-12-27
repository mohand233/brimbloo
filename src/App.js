
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Service from'./pages/Service.jsx';
import Contact from './pages/Contact.jsx';
import Shop from './pages/Shop.jsx';
import About from './pages/About.jsx';
import Place from './pages/Place.jsx';
function App() {
  return (<>
  <BrowserRouter> <Routes>
    {/* <Route index element={<Home/>}/> */}
    <Route path='/' element={<Home />} />
    <Route path='About' element={<About/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='contact' element={<Contact/>}/>
    <Route path='Shop' element={<Shop/>}/>
    <Route path='Service' element={<Service/>}/>
    <Route path='Place' element={<Place/>}/>

    </Routes></BrowserRouter>

    </>
  );
}


export default App;
