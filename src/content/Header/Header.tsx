import React, { useEffect, useRef } from 'react';
import './Header.css';
import { matrixRun } from '../../utils/matrix';
import Typical from 'react-typical';
import { initAudioPlayer } from '../../utils/player';
import MenuOptions from '../../elements/header/menu-options/MenuOptions';

const Header: React.FC = () => {
    const canvas: React.RefObject<HTMLCanvasElement> = useRef(null)

    useEffect(() => {
        async function getAudioPlayer() {
            const musicSrc = require('../../resources/Alter_Ego.mp3');
            // const musicSrc = await require('../../resources/Ghinzu.mp3');
            initAudioPlayer(musicSrc, canvas)
        }
        getAudioPlayer();
        matrixRun();
    })

    const messages = [
        "Ghbdtn! Rfr ndjb ltkf& 👋", 1000,
        "Черт, опять раскладка 🤪", 1000,
        "Как твои дела? 🙂", 1000,
        "Хотя, раз ты здесь, скоро твое настроение поднимется с большой вероятностью 🙂", 1000,
        "Мне кажется, я уже немного зануда... 🤔", 1000,
        "Предлагаю продолжить 😊", 600000,
    ];

    const phone = "89600981865".split("");

    return (
        <>
            <div id="header">
                <div className="box-header">
                    <div className="profile-card">
                        <div className="image" />
                        <div className="info">
                            <div className="title">Zharavin Arkady</div>
                            <div className="description">frontent-developer of the company <img width={150} height={18} src={require('../../images/citronium.png')} alt="Citronium" />, 24 y.o.</div>
                            <div className="description"><strong>My skills:</strong> TS, JS, React, RN, AngularJS, Redux, HTML5, CSS3, SASS, Webpack, git, etc.</div>
                            <div className="melody">
                                {phone.map((item: string) => (
                                    <div className="note">{item}</div>
                                ))}
                            </div>
                        </div>
                        <div className="player">
                            <div className="music-title">My top music today</div>
                            <canvas ref={canvas} />
                        </div>
                    </div>
                    <MenuOptions />
                </div>
                <div className="type-text">
                    <Typical
                        steps={messages}
                        loop={Infinity}
                        wrapper="p"
                    />
                </div>
            </div>
        </>
    );
}

export default Header;
