import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import SignInPage from "./Pages/Signin/Signin";
import SignUpPage from "./Pages/SignUp/SignUp";
import Categories from "./Pages/Home/Categories";
import CategoryPage from "./Pages/CategoryPage";
import ArticlePage from "./Pages/ArticlePage";
function App() {
  return (
   <>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories/>}/>
       <Route path="/sign-in/*" element={<SignInPage />} />
      <Route path="/sign-up/*" element={<SignUpPage />} />
       <Route
    path="/categories/:slug"
    element={<CategoryPage />}
  />

  <Route
    path="/articles/:slug"
    element={<ArticlePage />}
  />
    </Routes>
    </>
  );
}

export default App;