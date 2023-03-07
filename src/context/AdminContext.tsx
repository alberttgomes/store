import React, { createContext, FC, useState } from "react";

type IPropsChildren = {
    children: React.ReactNode
}

type IPropsAll = {
    props?: IPropsAdmin
    setProps: (newValue: IPropsAdmin) => void;
}

interface IPropsAdmin {
    user: {
        email: string,
        name: string,
        password: string
    }
}

const defaultState = {
    user: {
        email: "",
        name: "",
        password: "",
    }
}

export const AdminContext = createContext<IPropsAll>({ props: defaultState, setProps: props => props });

const ProviderAdmin: FC<IPropsChildren> =  ({ children }) => {
    
    const [props, setProps] = useState<IPropsAdmin>(defaultState);

    return (
        <AdminContext.Provider
            value={{props, setProps}}
        >
            {children}
        </AdminContext.Provider>
    )
}

export default ProviderAdmin;