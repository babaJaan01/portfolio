import React from 'react';
import './index.scss';
import logo from '../../../assets/images/logofull.png'

const Logo = () => (
    <div className="logo-containers">
        <img src={logo} alt="Logoc" className="home-logo" />
    </div>
);

export default Logo;
