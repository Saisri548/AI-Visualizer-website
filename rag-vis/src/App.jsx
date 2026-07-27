import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./Pages/Home/Home";
import Categories from "./Pages/Home/Categories";
import CategoryPage from "./Pages/CategoryPage";
import ConceptPage from "./Pages/ConceptPage";

import SignInPage from "./Pages/Signin/Signin";
import SignUpPage from "./Pages/SignUp/SignUp";
import ArticlePage from "./Pages/ArticlePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/categories" element={<Categories />} />

        <Route path="/categories/:slug" element={<CategoryPage />} />

        {/* NEW */}


    <Route
      path="/concept/:slug"
      element={<ArticlePage />}
    />

        <Route
          path="/sign-in/*"
          element={<SignInPage />}
        />

        <Route
          path="/sign-up/*"
          element={<SignUpPage />}
        />

      </Routes>
    </>
  );
}

export default App;