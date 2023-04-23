
import ReactDOM from 'react-dom/client';
import App from './App';
import Images from './Components/image';
import Box from './Components/Box';
import NavBar from './Components/NavBar';
import Contact from './Components/Contact';
import About from './Components/About';
import Service from './Components/service';
import Message from './Components/Message';
import Footer from './Components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <>
   
   <Images/>
   <NavBar/>
   <Box/>
   <Contact/>
   <About/>
   <Service/>
   <Message/>
   <Footer/>

   </>
);


