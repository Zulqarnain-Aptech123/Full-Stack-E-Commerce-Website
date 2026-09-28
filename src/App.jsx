
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App
