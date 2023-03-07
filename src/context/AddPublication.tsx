import React, { createContext, FC, useState } from "react";
import { PRODUCT_ITEM_AMAZON } from "./../util/DefaultState"

type IPropsChildren = {
    children: React.ReactNode
};

type IPropsAll = {
    props?: IPropsPublication
    setProps: (newValue: IPropsPublication) => void;
}

interface IPropsPublication {
    product: {
        image: string;
        href: string;
    }
};

const PublicationContext = createContext<IPropsAll>
                    ({ props: PRODUCT_ITEM_AMAZON, setProps: props => props});

const ProviderPublication: FC<IPropsChildren> = ({ children }) => {
    const [props, setProps] = useState<IPropsPublication>(PRODUCT_ITEM_AMAZON);
    
    return (
        <PublicationContext.Provider
            value={{props, setProps}}
        >
            {children}
        </PublicationContext.Provider>
    )
};

export default ProviderPublication;