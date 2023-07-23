import {createContext, useState } from "react";


export const cartcontext = createContext()


export const CartProvider = ({children})=>{

    const [cart, setCart] = useState([])
    return(
        <cartcontext.Provider value={{cart, setCart}}>
            {children}
        </cartcontext.Provider>
    )
}