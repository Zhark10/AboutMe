import React, { useContext } from 'react';
import './Footer.module.css';

import { ColorContext } from '../../../../ColorProvider';

const Header: React.FC = () => {

    const { theme: [color] } = useContext(ColorContext as any);

    return (
        <div id="footer" >
           
        </div>
    );
}

export default Header;
