import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

export const Form = ()=>{
    const initialValue = {
        title: '',
        author: '',
        description: ''
     }


const navigate = useNavigate();
const [data, setData] = useState(initialValue);
const [message, setMessage] = useState('');
const [btnDisabled, setBtnDisabled] = useState(true);


const handleInputChange = (e) =>{
    setData({
        ...data,
        [e.target.name]: e.target.value,
    });
};

const validateForm = () => {
  switch (true) {
    case data.title === '':
        setMessage('Please insert a title');
        setBtnDisabled(true);
        break;
    case data.title.length < 3:
        setMessage('Title must be least 3 characters')
        setBtnDisabled(true)
        break;
    case data.author === '':
        setMessage('Please insert an author')
        setBtnDisabled(true)
        break;
    case data.author.length < 3:
        setMessage('Author`s must be least 3 characters')
        setBtnDisabled(true)
        break;
    default:
        setMessage('')
        setBtnDisabled(false)
        break;
  }
};

useEffect(() =>{
    validateForm();
}, [data])

const handleOnSubmit = (e) => {
    e.preventDefault();
   if(localStorage.getItem('newBook') === null){
    const firstBook = [data];
    localStorage.setItem('newBook', JSON.stringify(firstBook));
   }else {
    let book = JSON.parse(localStorage.getItem('newBook'));
    book.push(data)
    localStorage.removeItem('newBook')
    localStorage.setItem('newBook', JSON.stringify(book))
   }
   setData(initialValue);
   setTimeout(() => {
    navigate('/books');
   }, '2000');
};

return (
    <div className='container-form'>
        <h1>Insert a new book</h1>
        <form onSubmit={handleOnSubmit}>
            <div className='inputs-form'>
                <input type="text" className='new-title' id='title' name='title' placeholder='Insert your title' onChange={handleInputChange} />
            </div>
            <div className='inputs-form'>
                <input type="text" className='new-author' id='author' name='author' placeholder='Insert the author' onChange={handleInputChange} />
            </div>
            <div className='inputs-form'>
                <textarea className='new-description' name="description" id="description" cols="30" rows="10" placeholder='Insert a new description' onChange={handleInputChange}></textarea>
            </div>
            <button className='btn-form' type='submit' value='send' onChange={handleInputChange} >Send</button>
            <h4 className='validation-msg'>{message}</h4>
        </form>
    </div>
)
};
export default Form;