import * as React from 'react';
import { createContext, useState } from 'react';

export const ScrollProgressContext = createContext(null);

export default ({ children }: any) => {
    const [scrollProgress, setScrollProgress] = useState(0)

    const store: any = {
        theme: [scrollProgress, setScrollProgress],
    }

    return (
        <ScrollProgressContext.Provider value={store}>
            {children}
        </ScrollProgressContext.Provider>
    )
}