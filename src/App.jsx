import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
