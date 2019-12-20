import React from 'react';
import './cable.css';
import { COLORS } from '../../global/colors';

interface Props {
    length: number;
    color: string;
    topDot?: boolean;
    bottomDot?: boolean;
}

const Cable: React.FC<Props> = ({ length}) => {
    return (
        <div className="cable" style={{ height: length }}>
            <div className="line" style={{ backgroundColor: COLORS.main }}></div>
            <div className="dot" style={{ backgroundColor: COLORS.main, top: length + 4 }}></div>
        </div>
    );
};

export default Cable;
