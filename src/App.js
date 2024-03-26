
import './App.css';
import Landing from './Components/Landing/Landing';
import AboutUs from './Components/About us/AboutUs'
import Services from './Components/Services/Services';
import Testymonials from './Components/Testymonials/Testymonials';
import ContactUs from './Components/Contact Us/ContactUs';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <>
      <Landing />
      <AboutUs />
      <Services />
      <Testymonials/>
      <ContactUs/>
      <ToastContainer/>

    </>


  );
}

export default App;
