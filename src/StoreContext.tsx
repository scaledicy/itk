import { createContext } from 'react'

const StoreContext = createContext(null)

export const Provider = (props: any) => {
    console.log(props)
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContext
