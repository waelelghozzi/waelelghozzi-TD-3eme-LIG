
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Titles from './components/Titles/Titles';
import Billbord from './components/Billbord/Billbord';
import Footer from './components/Footer/Footer';
import { Routes,Route } from 'react-router-dom';
function App() {
  //these are the basic sections of our projects
  return <div className='App'>
   <Routes>
    <Route index element=
    
    {<>
    <Navbar/>
    <Billbord/>
    <Titles/>
    <Footer/>
    </>}>

    </Route>
   </Routes>

    
</div>
}

export default App;
 