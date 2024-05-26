import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import './Form.scss'

export const Form = ()=>{
    const initialState = {
        title: '',
        author: '',
        description: ''
     }


const navigate = useNavigate();
const [data, setData] = useState(initialState);
const [message, setMessage] = useState('');
const [btnDisabled, setBtnDisabled] = useState(true);


const handleInputChange = (e) =>{
    setData({
        ...data,
        [e.target.title]: e.target.value,
    });
};

const validateForm = () => {
  const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  switch (true) {
    case data.title == '':
        setMessage('Please insert a title');
        setBtnDisabled(true);
        break;
    case data.title.length <= 3:
        setMessage('Title must be least 3 characters')
        setBtnDisabled(true)
        break;
    case data.author == '':
        setMessage('Please insert an author')
        setBtnDisabled(true)
        break;
    case data.author.length <= 3:
        setMessage('Author`s must be least 3 characters')
        setBtnDisabled(true)
        break;
    case data.description == '':
        setMessage('Please insert a description')
        setBtnDisabled(true)
        break;
    case data.description.length <= 50:
        setMessage('Description must be least 50 characters')
        setBtnDisabled(true)
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
   if(localStorage.newBook == undefined){
    const firstBook = [data];
    localStorage.setItem('newBook', JSON.stringify(firstBook));
   }else {
    let book = JSON.parse(localStorage.getItem(newBook));
    localStorage.removeItem('newBook')
    localStorage.setItem('newBook', JSON.stringify(book))
   }
   setData(initialState);
   setTimeout(() => {
    navigate('/books');
   }, '3000');
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
            <button className='btn-form' type='submit' value='send' onChange={handleInputChange} disabled={btnDisabled}>Send</button>
            <h4 className='validation-msg' id='validationMsg' name='validationMsg'>
                {message}
            </h4>
        </form>
    </div>
)
};
export default Form;