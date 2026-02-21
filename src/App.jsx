import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Features from "./pages/Features"
import Header from "./components/Header"
import Pricing from "./pages/Pricing"
import Faq from "./pages/Faq"
import './App.css'

export default function App() {
  return (
    <>

    <Header />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </>
  )
}