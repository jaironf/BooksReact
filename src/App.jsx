import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Books from './components/Books/Books'
import { GlobalProvider } from './context/GlobalState'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/form' element={<Form/>}/>
              <Route path='/books' element={<Books />}/>
            </Routes>
        </GlobalProvider>
      
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
