import { Routes, Route } from "react-router";
import Header from './components/Header';
import Home from './pages/Home';
import Contact from "./pages/Contact";

import './styles/app.css'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
