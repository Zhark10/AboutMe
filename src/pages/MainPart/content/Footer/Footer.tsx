import React, { useContext } from 'react';
import './Footer.css';
import { ColorContext } from '../../../../ColorProvider';

const Header: React.FC = () => {

    const { theme: [color] } = useContext(ColorContext as any);

    return (
        <div id="header" >
            <div className="fasteners">
                <Cable length={30} color={color} bottomDot />
                <div style={{ marginRight: 150, zIndex: 4 }}>
                    <Cable length={30} color={color} bottomDot />
                </div>
            </div>
            <div className="box-header">
                <div className="profile-card" >
                    <ProfileInfo />
                    {/* <AudioPlayer /> */}
                </div>
                <MenuOptions color={color} />
            </div>
            <div className="type-text" style={{ color }}>
                <Typical
                    steps={MESSAGES}
                    loop={Infinity}
                    wrapper="div"
                />
            </div>
        </div>
    );
}

export default Header;
