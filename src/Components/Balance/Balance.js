import React from 'react';
import { Modal } from 'react-bootstrap';
import logo from '../../Images/Sapphire-Mark-New.png'
import './Balance.css'

const Balance = ({ setShowBalance, showBalance }) => {
    return (
        <>
            <Modal show={showBalance} fullscreen={true} onHide={() => setShowBalance(false)} className="custom-bg">

                <Modal.Body className='p-0'>
                    <div className='logo'>
                        <img src={logo} alt="" />
                    </div>
                    
                    <div className=' container-box'>
                        <div className="contents-box">
                            <div className="contents-center-box gap-3 gap-md-5 cost-center-box">
                                <p className="center-number-text">0x343....32</p>
                                <div>
                                    <p className="balance-text text-center">Locked Balance:</p>
                                    <p className='text-center btn-top-bottom-text m-0 mb-3'>55,000GXB</p>
                                    <button className="custom-border contents-box-btn  box-shadow-btn">Add
                                    </button>
                                    
                                </div>
                                <div>
                                <p className="balance-text text-center">Reward Balance:</p>
                                <p className='text-center btn-top-bottom-text m-0 mb-3'>45GXB</p>
                                    <button className="custom-border contents-box-btn  box-shadow-btn">

                                        Claim
                                    </button>
                                </div>


                            </div>

                        </div>
                    </div>


                </Modal.Body>
            </Modal>
        </>
    );
};

export default Balance;