import React from 'react';
import './menu-options.css';

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
            {options.map((item: { title: string }, key: number) => (
                <div key={item.title} className="option">
                    <div className="option-line" style={{backgroundColor: color}}/>
                    <div className="option-text">{item.title}</div>
                </div>
            ))}
        </div>
    );
};

export default MenuOptions;
