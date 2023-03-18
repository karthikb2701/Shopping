import { useState, createContext } from 'react';

const counterContext = createContext();

export const CounterProvider = ({ children }) => {

    const [counter, setCounter] = useState(localStorage.getItem('items') ? parseInt(localStorage.getItem('items')) : 0);
    console.log(parseInt(localStorage.getItem('items')));
    //Increase counter
    const increment = () => {
        localStorage.setItem('items', counter);
        return (

            setCounter(counter + 1)
        )

    }



    return (
        <counterContext.Provider value={{ counter, increment }}>
            {children}
        </counterContext.Provider>
    )
}

export default counterContext;