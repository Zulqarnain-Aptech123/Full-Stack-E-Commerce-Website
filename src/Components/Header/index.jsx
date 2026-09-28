import React from 'react';
import Logo from '../../assets/Images/bacola-logo.png'
import { Link } from 'react-router';

const Header = () => {
    return (
        <>
            <div className='HeaderWrapper bg-blue'>
                <div className='top-strip'>
                    <div className="container">
                        <p className='mb-0 mt-0 text-center'>Due to the <b> COVID 19 </b> epidemic, orders may be processed with a slight delay</p>
                    </div>
                </div >
            </div>
            <div className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={'/'} ><img src={Logo} alt="Logo" /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
