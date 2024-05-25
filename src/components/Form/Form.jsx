import React, {useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom'

export const Form = ()=>{
    const initialState = {
        title: '',
        author: '',
        description: ''
     }
}

const [data, setData] = useContext(initialState);
const [message, setMessage] = useContext('');
const [btnDisabled, setBtnDisabled] = useContext(true);


const validateForm = () => {
    if(!data.title) {
        setMessage('');
    }else if(data.title.length < 3) {
        setMessage('Title must be least 3 characters');
        setBtnDisabled(true);
    }else{
        setMessage('');
        setBtnDisabled(false);
    }
};

useEffect(() =>{
    validateForm();
}, [data])

const handleInputChange = (e) =>{
    setData({
        ...data,
        [e.target.title]: e.target.value,
    });
};

const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    setData(initialState);
    Navigate('/')
};

return (
    <div>
        <h1>Insert your book</h1>
        <form onSubmit={handleOnSubmit}>
            <div>
                impu
            </div>
        </form>
    </div>
)