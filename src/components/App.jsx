import React, {useState} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import theme from './ui/Theme';
import Header from './ui/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Footer from '../components/ui/Footer';
import LandingPage from './LandingPage';
import Services from './Services';
import CustomSoftware from './CustomSoftware';
import MobileApps from './MobileApps';
import Websites from './Websites';
import Revolution from './Revolution';
import About from './About';
import Contact from './Contact';

function App() {

  const [value, setValue] = useState(0);
  const [selectedIndex , setSelectedIndex] = useState(0);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path='/' render={(props) => <LandingPage setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/services' render={(props) => <Services setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/customsoftware' render={(props) => <CustomSoftware setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/mobileapps' render={(props) => <MobileApps setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/websites' render={(props) => <Websites setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/revolution' render={(props) => <Revolution setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/about' render={(props) => <About setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/contact' render={(props) => <Contact setValue={setValue} setSelectedIndex={setSelectedIndex}/>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
        
   
  );
}

export default App;