import React, { useContext } from 'react';
import styles from './Header.css';
import Typical from 'react-typical';
import MenuOptions from './components/menu-options/menu-options';
import { MESSAGES } from './models/models';
import { ColorContext } from '../../../../ColorProvider';
import Cable from '../../../../components/shared/cable';
import ProfileInfo from './components/profile-info/profile-info';

const Header: React.FC = () => {

    const { theme: [color] } = useContext(ColorContext as any);

    return (
        <div id={styles.header} >
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
