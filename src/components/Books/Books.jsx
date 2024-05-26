import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './Books.scss'


const Books = () => {
    const { books, getBooks } = useContext(GlobalContext);

    useEffect(()=>{
        getBooks()
    }, [])

    if(books.length <= 0){
      return <p>Cargando...</p> //CAMBIAR POR UN SPINNER
    }

  return <div className='container'>{books.map((books, i) =>{
    return(
      <div >
        <div className='card' key='i'>
          <h3 className='card-title'>{books.title}</h3>
          <h4 className='card-author'>{books.author}</h4>
          <p className='card-description'>{books.description}</p>
        </div>
      </div>
    )
  })}</div>
}

export default Books;