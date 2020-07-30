import React from 'react';
import './profile-info.css';
import { PHONE } from '../../../../../pages/MainPart/content/Header/models/models';

const ProfileInfo = () => (
    <>
        <div className="image" />
        <div className="info">
            <div className="title">Zharavin Arkady</div>
            <div className="description">frontent-developer of the company <img width={150} height={18} src={require('../../../../../images/citronium.png')} alt="Citronium" />, 24 y.o.</div>
            <div className="description"><strong>My skills:</strong> TS, JS, React, RN, AngularJS, Redux, HTML5, CSS3, SASS, Webpack, git, etc.</div>
            <div className="melody">
                {PHONE.map((item: string, key: number) => (
                    <div key={key} className="note">{item}</div>
                ))}
            </div>
        </div>
    </>
);

export default ProfileInfo;

