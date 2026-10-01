
import { BrowserRouter, createBrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Home from './Pages/Home';
import Header from './Components/Header';

const route = createBrowserRouter([
  { path: '/', element: <Home /> }
])

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route route={route} />
        </Routes>
      </BrowserRouter>
    </>
  )

}
export default App
