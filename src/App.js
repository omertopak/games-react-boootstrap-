import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Games from "./components/Games";
import Genre from "./pages/Genre";
import Categories from "./pages/Categories";
import Navs from "./components/Navs";
import Footer from "./components/Footer";
import PrivateRouter from "./pages/PrivateRouter";
function App() {
  return (
    <div className="App container" style={{height:"100vh"}}>
     <Navs/>
      <Routes >   
        
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/categories" element={<Categories/>}/>
            <Route path="/categories" element={<PrivateRouter/>}>
               <Route  path="/categories/:item" element={<Genre/>}/>
            </Route> 
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
