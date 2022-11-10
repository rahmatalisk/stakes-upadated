
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Wallet from './Components/Wallet/Wallet';
import { useState } from 'react';
import Duration from './Components/Duration/Duration';
import Cost from './Components/Cost/Cost';
import Balance from './Components/Balance/Balance';


function App() {
  const [showWallet, setShowWallet] = useState(false);
  const [showDuration, setShowDuration] = useState(false);
  const [showCost, setShowCost] = useState(false);
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div>
       <Home setShowWAllet={setShowWallet} showWAllet={showWallet}/>
       <Wallet setShowWAllet={setShowWallet} showWAllet={showWallet} setShowDuration={setShowDuration} showDuration={showDuration} setShowBalance={setShowBalance} showBalance={showBalance}/>
       <Duration setShowDuration={setShowDuration} showDuration={showDuration} setShowCost={setShowCost} showCost={showCost}/>
       <Cost setShowCost={setShowCost} showCost={showCost}/>
       <Balance setShowBalance={setShowBalance} showBalance={showBalance}/>

    </div>
  );
}

export default App;
