import React from 'react';
import logo from '../../Images/Sapphire-Mark-New.png'
import './HomeContents.css'

const HomeContents = ({setShowWAllet,showWAllet}) => {
    function handleShow() {
 
        setShowWAllet(true);
      }
    return (
        <div>
            <div className='logo mb-0'>
            <img src={logo} alt="" />
            </div>
            <div className='home-text'>
                <h1>Stake your <span>GXB</span></h1>
                <p>Earn Up To 60% apy</p>

                <div className="stake-btn-group">
                    <button className="custom-border custom-btn d-block" onClick={() => handleShow()}>
                    Connect Wallet
                    </button>
                    <button className="custom-border custom-btn d-block mt-4">
                    Staking Stats
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeContents;