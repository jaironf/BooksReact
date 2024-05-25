import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'
import axios from "axios";

const apiKey = 'ubWUFC6YeBj8i7SkhE5gb0FlXoTdFAaJ';
const API_URL = 'https://api.nytimes.com/svc/books/v3/lists/best-sellers/history.json?api-key=' + apiKey;


const initialState ={
    books: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const getBooks = async () => {
        const res = await axios.get(API_URL);
        dispatch({
            type: 'GET_BOOKS',
            payload: res.data.results,
        })
    }



    return(
        <GlobalContext.Provider 
        value={{
            books: state.books,
            getBooks,
        }}>
            {children}
        </GlobalContext.Provider>
    )
    
}