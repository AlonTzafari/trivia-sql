import {createContext} from 'react';

export const userContext = createContext({
    userId: null,
    setUserId: () => {}
});

