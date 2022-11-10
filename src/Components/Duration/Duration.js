import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../Images/Sapphire-Mark-New.png'
import './Duration.css'

const Duration = ({ setShowDuration, showDuration, setShowCost, showCost }) => {
  return (
    <>
      <Modal show={showDuration} fullscreen={true} onHide={() => setShowDuration(false)} className="custom-bg">

        <Modal.Body className='p-0'>
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <p className="text-center select-duration">Select Duration</p>
          <div className=' container-box'>
            <div className="contents-box">
              <div className="contents-center-box">
                <button className="custom-border contents-box-btn  my-3 " onClick={() => setShowCost(true)}>

                  3 month <sup>20% Apy</sup>
                </button>
                <button className="custom-border contents-box-btn  my-3">

                  6 Month <sup>32% Apy</sup>
                </button>
                <button className="custom-border contents-box-btn  my-3">

                  12 Month <sup>60% Apy</sup>
                </button>
                <p className="bottom-text">All staking rewards are claimable daily</p>
              </div>

            </div>
          </div>


        </Modal.Body>
      </Modal>
    </>
  );
};

export default Duration;