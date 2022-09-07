import { noop } from "lodash";
import React, { createContext, useCallback, useState } from "react";
import { IUser } from "../../interfaces";
import { createUserObject } from "../../utils";

interface IUserContextProps {
    createdUser: IUser
    setCreatedUser: React.Dispatch<React.SetStateAction<IUser>>
    handleUpdateUser: (data: any, key: string, value: any) => void
}

export const UserContext = createContext<IUserContextProps>({
    createdUser: createUserObject(),
    setCreatedUser: noop,
    handleUpdateUser: noop
})

export const UserContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [ createdUser, setCreatedUser ] = useState<IUser>(createUserObject())

    const handleUpdateUser = useCallback((data: any, key: string, value: any) => {
        setCreatedUser({...data, [key]: value})

    }, [ setCreatedUser ])

    return (
        <UserContext.Provider 
            value={{
                createdUser,
                setCreatedUser,
                handleUpdateUser
            }}
        >
            {children}
        </UserContext.Provider>
    )
}