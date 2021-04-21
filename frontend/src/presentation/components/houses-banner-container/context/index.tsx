import React from 'react';

export const HouseBannerContainerContext = React.createContext(null);
HouseBannerContainerContext.displayName = 'HouseBannerContainerContext';

export const useHouseBannerContext = () => {
    const context = React.useContext(HouseBannerContainerContext)
    if(!context) {
        throw new Error('useHouseBannerContext should be used within a <HouseBannerContainer />')
    }
    return context
}
