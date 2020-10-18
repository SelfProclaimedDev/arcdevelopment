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
          <Route exact path='/websites' component={() => <div>Website</div>} />
          <Route exact path='/revolution' component={() => <div>Revolution</div>} />
          <Route exact path='/about' component={() => <div>About</div>} />
          <Route exact path='/contact' component={() => <div>Contact</div>} />
          <Route exact path='/estimate' component={() => <div>Estimate</div>} />
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
    </ThemeProvider>
        
   
  );
}

export default App;