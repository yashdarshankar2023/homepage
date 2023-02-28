
import './App.css';
import Navbar from './components/navbar'
import Description from './components/description';
import Aboutus from './components/aboutus';
import Work from './components/work';
import Connect from './components/connect';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Description/>
      <Aboutus/>
      <Work/>
      <Connect/>
      <Footer/>
    
      

    </div>
  );
}

export default App;