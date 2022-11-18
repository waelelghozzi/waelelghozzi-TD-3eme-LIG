
import './App.css';
import Navbar from './components/Navbar';
import Titels from './components/Titels';
import Billbord from './components/Billbord';
import Footer from './components/Footer';
function App() {
  //these are the basic sections of our projects
  return <div className='App'>
    <Navbar/>
    <Billbord/>
    <Titels/>
    <Footer/>
</div>
}

export default App;
 