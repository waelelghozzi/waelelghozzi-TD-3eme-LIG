
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Titles from './components/Titles/Titles';
import Billbord from './components/Billbord/Billbord';
import Footer from './components/Footer/Footer';
function App() {
  //these are the basic sections of our projects
  return <div className='App'>
    <Navbar/>
    <Billbord/>
    <Titles/>
    <Footer/>
</div>
}

export default App;
 