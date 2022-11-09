
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Wallet from './Components/Wallet/Wallet';
import { useState } from 'react';
import Duration from './Components/Duration/Duration';


function App() {
  const [showWallet, setShowWallet] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  return (
    <div>
       <Home setShowWAllet={setShowWallet} showWAllet={showWallet}/>
       <Wallet setShowWAllet={setShowWallet} showWAllet={showWallet} setShowDuration={setShowDuration} showDuration={showDuration}/>
       <Duration setShowDuration={setShowDuration} showDuration={showDuration}/>

    </div>
  );
}

export default App;
