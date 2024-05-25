import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'


const Books = () => {
    const { books, getBooks } = useContext(GlobalContext);

    useEffect(()=>{
        getBooks()
    }, [])

    if(books.length <= 0){
      return <p>Cargando...</p> //CAMBIAR POR UN SPINNER
    }

  return <div>{books.map(books =>{
    return(
      <div>
        <h3>{books.title}</h3>
        <h4>{books.author}</h4>
        <p>{books.description}</p>
      </div>
    )
  })}</div>
}

export default Books;