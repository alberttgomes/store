import React, { createContext, FC, useState } from "react";
import { PRODUCT_ITEM_AMAZON } from "./../util/DefaultState"

type IPropsChildren = {
    children: React.ReactNode
};

type IPropsAll = {
    propsPublication?: IPropsPublication
    setPropsPublication: (newValue: IPropsPublication) => void;
}

interface IPropsPublication {
    product: {
        image: string;
        href: string;
    }
};

export const PublicationContext = createContext<IPropsAll>
                    ({ propsPublication: PRODUCT_ITEM_AMAZON, setPropsPublication: propsPublication => propsPublication});

const ProviderPublication: FC<IPropsChildren> = ({ children }) => {
    const [propsPublication, setPropsPublication] = useState<IPropsPublication>(PRODUCT_ITEM_AMAZON);
    
    return (
        <PublicationContext.Provider
            value={{propsPublication, setPropsPublication}}
        >
            {children}
        </PublicationContext.Provider>
    )
};

export default ProviderPublication;