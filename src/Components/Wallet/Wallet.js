import React from 'react';
import logo from '../../Images/Sapphire-Mark-New.png'
import Modal from 'react-bootstrap/Modal';
import logo1 from "../../Images/metamask-recreated.png"
import logo2 from "../../Images/WalletConnect-Logo 1.png"
import logo3 from "../../Images/18060234 1.png"

const Wallet = ({ setShowWAllet, showWAllet,setShowDuration, showDuration  }) => {

  return (
    <>
      <Modal show={showWAllet} fullscreen={true} onHide={() => setShowWAllet(false)} className="custom-bg">

        <Modal.Body className='p-0'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <div className=' container-box'>
            <div className="contents-box">
              <div  className="contents-center-box">
                <button className="custom-border contents-box-btn  my-3 "  onClick={() => setShowDuration(true)}>
                <img className='me-2 me-md-5' src={logo1} alt="" />
                  Staking Stats
                </button>
                <button className="custom-border contents-box-btn  my-3">
                  <img className='me-2 me-md-5' src={logo2} alt="" />
                  Staking Stats
                </button>
                <button className="custom-border contents-box-btn  my-3">
                <img className='me-2 me-md-5' src={logo3} alt="" />
                  Staking Stats
                </button>
              </div>

            </div>
          </div>


        </Modal.Body>
      </Modal>
    </>
  );
};

export default Wallet;