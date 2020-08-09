import React, { useContext } from 'react';
import './Footer.css';

import { ColorContext } from '../../../../ColorProvider';

const Footer: React.FC = () => {

    const { theme: [color] } = useContext(ColorContext as any);

    return (
        <div className="footer" >
           
        </div>
    );
}

export default Footer;
