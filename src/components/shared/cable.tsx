import React, { CSSProperties } from 'react';
import './cable.css';
import { COLORS } from '../../global/colors';

interface Props {
    length: number;
    color?: string;
    topDot?: boolean;
    bottomDot?: boolean;
    lineStyles?: CSSProperties;
}

const Cable: React.FC<Props> = ({ length, bottomDot, lineStyles}) => {
    return (
        <div className="cable" style={{ height: length }}>
            <div className="line" style={{ backgroundColor: COLORS.main, ...lineStyles }}/>
            {bottomDot && <div className="dot" style={{ backgroundColor: COLORS.main, top: length + 4 }}></div>}
        </div>
    );
};

export default Cable;
