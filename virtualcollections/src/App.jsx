import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage.jsx"

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />}/>
      </Routes>
  )
}

export default App
