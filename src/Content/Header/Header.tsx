import React, { useEffect } from 'react';
import './Header.css';
import { matrixRun } from './matrix';
import Typical from 'react-typical';

const Header: React.FC = () => {
    useEffect(() => {
        matrixRun();
        // game();
        // eventWindowLoaded();
    })

    const messages = [
        "Ghbdtn! Rfr ndjb ltkf& 👋", 1000,
        "Черт, опять раскладка 🤪", 1000,
        "Как твои дела? 🙂", 1000,
        "Хотя, раз ты здесь, скоро твое настроение поднимется с большой вероятностью 🙂", 1000,
        "Есть, конечно, такие факторы, как: темперамент, характер, личная неприязнь 😀", 1000,
        "Но вряд ли это так 😉", 1000,
        "Мне кажется, я уже немного зануда... 🤔", 1000,
        "Предлагаю продолжить 😊", 60000,
    ];
    return (
        <>
            <div id="header">
                <div className="box-header">
                    <div className="profile-card">
                        <div className="image" />
                        <div className="info">
                            <div className="title">Жаравин Аркадий</div>
                            <div className="description">frontent-разработчик компании <img width={150} height={18} src={require('../../images/citronium.png')} alt="Citronium" />, 24 года</div>
                            <div className="description"><strong>Ключевые навыки:</strong> TS, JS, React, RN, AngularJS, Redux, HTML5, CSS3, SASS, Webpack, git, etc.</div>
                            <div className="melody">
                                <div className="note">П</div>
                                <div className="note">Р</div>
                                <div className="note">О</div>
                                <div className="note">В</div>
                                <div className="note">Е</div>
                                <div className="note">Д</div>
                                <div className="note">И</div>
                            </div>
                        </div>
                    </div>
                    <div className="sections">
                        <div className="section">
                            <div className="section-line" />
                            <div className="section-text" id="section-text-1">Обо мне</div>
                        </div>
                        <div className="section">
                            <div className="section-line" />
                            <div className="section-text">Хобби</div>
                        </div>
                        <div className="section">
                            <div className="section-line" />
                            <div className="section-text">Работа</div>
                        </div>
                        <div className="section">
                            <div className="section-line" />
                            <div className="section-text" id="section-text-4">Стихи</div>
                        </div>
                    </div>
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
