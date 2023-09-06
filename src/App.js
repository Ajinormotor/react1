import { useEffect } from 'react';
import Aos from 'aos';


import './App.css';
import Footer from './UI/Footer';
import Header from './component/Header/Header';
import Hero from './UI/Hero';
import Pricing from './UI/Pricing';


function App() {

useEffect(() =>{
  Aos.init()

},[])

  return (
<>
<Header  />
<Hero   />
<Pricing  />
<Footer  />

</>
  );
}

export default App;
