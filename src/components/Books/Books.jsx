import React, { useContext, useEffect} from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './Books.scss'


const Books = () => {
    const { books, getBooks } = useContext(GlobalContext);

    useEffect(()=>{
        getBooks()
    }, [])

    if(books.length <= 0){
      return <p>Cargando...</p>
    }

  return <div className='container'>{books.map((books, i) =>{
    return(
      <div key={i}>
        <div className='card'>
          <h3 className='card-title'>{books.title}</h3>
          <h4 className='card-author'>{books.author}</h4>
          <p className='card-description'>{books.description}</p>
        </div>
      </div>
    )
  })}</div>
}

export default Books;