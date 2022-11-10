import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../Images/Sapphire-Mark-New.png'
import './Cost.css'

const Cost = ({ setShowCost, showCost }) => {
    return (
        <>
            <Modal show={showCost} fullscreen={true} onHide={() => setShowCost(false)} className="custom-bg">

                <Modal.Body className='p-0'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    <p className="text-center select-duration">12 Month</p>
                    <div className=' container-box'>
                        <div className="contents-box">
                            <div className="contents-center-box gap-5 cost-center-box">
                                <p className="center-number-text">0x343....32</p>
                                <div>
                                    <p className='text-end btn-top-bottom-text m-0 mb-3'>Available: <span className='ms-2'>44,000</span></p>
                                    <button className="custom-border contents-box-btn  "><div className="amount-text mx-3">
                                    <p className='m-0'>Amount</p>
                                    <p className='m-0'>0 <span className='ms-2'>MAX</span></p>
                                    </div>
                                    </button>
                                    <p className='text-end btn-top-bottom-text mt-3'>Estimated Daily Reward: <span className='ms-2'>2.4GXB</span></p>
                                </div>
                                <button className="custom-border contents-box-btn  ">

                                    Stake
                                </button>


                            </div>

                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
};

export default Cost;