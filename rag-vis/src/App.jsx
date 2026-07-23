import { Routes, Route } from "react-router-dom";
import Categories from "./Pages/Categories";
import Home from "./pages/Home";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Categories" element={<Categories/>}/>
    </Routes>
  );
}

export default App;