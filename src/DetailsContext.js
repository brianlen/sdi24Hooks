import React from 'react';

const detailsContext = React.createContext(
    {
        details: {},            // empty object
        setDetails: () => {}    // empty function
    });

export default detailsContext;