import * as React from 'react';
import { createContext, useState } from 'react';
import { COLORS } from '../../global/colors';

const defaultColor = COLORS.main
export const ColorContext = createContext(null);

export default ({ children }: any) => {
    const [color, setColor] = useState(defaultColor)

    const store: any = {
        theme: [color, setColor],
    }

    return (
        <ColorContext.Provider value={store}>
            {children}
        </ColorContext.Provider>
    )
}