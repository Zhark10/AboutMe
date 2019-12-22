import React, { useState, useEffect, useContext } from 'react';
import './different-options.css';
import Cable from '../../../shared/cable';
import Clock from 'react-clock';
import { ColorContext } from '../../../../ColorProvider';

const DifferentOptions: React.FC = () => {
    const [date, setDate] = useState(new Date());
    const { theme: [color] } = useContext(ColorContext as any);

    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, [])

    return (
        <div className='clock'>
            <Cable length={500} lineStyles={{backgroundColor: color}}/>
            <Clock value={date}
                className='analog-clock'
                minuteMarksWidth={1}
                minuteMarksLength={10}
                hourMarksWidth={6}
                hourMarksLength={24}
                secondHandWidth={5}
            />
        </div>
    );
};

export default DifferentOptions;
