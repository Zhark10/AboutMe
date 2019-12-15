import React from 'react';
import './MenuOptions.css';
import { string } from 'prop-types';

interface Props {
    color: string;
}

const MenuOptions: React.FC<Props> = ({ color }) => {
    const options = [
        { title: 'About me' },
        { title: 'Hobby' },
        { title: 'My job' },
        { title: 'Poems' },
    ]
    return (
        <div className="menu">
            {options.map((item: { title: string }) => (
                <div className="option">
                    <div className="option-dot"/>
                    <div className="option-line" />
                    <div className="option-text">{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default MenuOptions;
