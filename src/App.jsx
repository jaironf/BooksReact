import {Route, Routes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Books from './components/Books/Books'
import { GlobalProvider } from './context/GlobalState'



function App() {
  
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
           <Books/>
        </GlobalProvider>
      
      
      </BrowserRouter>
      
      
    </>
  )
}

export default App
