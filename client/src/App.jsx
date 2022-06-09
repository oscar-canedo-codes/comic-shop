import React from "react";

// PATHS
import { BrowserRouter as Router, NavLink, Routes, Route } from "react-router-dom";

// COMPONENTS
import Footer from './shared/Footer/Footer'
import Home from './pages/Home/Home';
import { Login } from './pages/Login/Login'
import ButtonLogOut from './shared/ButtonLogOut/ButtonLogOut';
import { Cart } from './pages/Cart/Cart'
import Register from './pages/Register/Register';
import { AuthenticationReq } from './shared/AuthenticationReq/AuthenticationReq'
import { JwtContext } from "./context/JwtContext";
import { useState, useEffect } from "react";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { ComicDetails } from "./components/ComicDetails/ComicDetails";
import ComicProvider from "./context/ComicContext";
import {API} from "./services/api" 

function App() {

  const [jwt, setJwt] = useState(localStorage.getItem("token"));
  const [search, setSearch] = useState([]);
  const [comics, setComics] = useState([]);

  const urlPage = `http://localhost:3000/`;

  useEffect(() => {
  
    API.get('comics').then((response) => {
      setComics(response.data);
    });
  }, [urlPage]);

  const searchComics = (e) => {
    let result = comics.filter(
      (comic) =>
        comic.name.toLowerCase().trim().includes(e.target.value) ||
        comic.autor.toLowerCase().trim().includes(e.target.value) ||
        comic.editorial.toLowerCase().trim().includes(e.target.value)
    );

    setSearch(result);
  };


  return (
    <ComicProvider>
      <JwtContext.Provider value={{ jwt, setJwt }}>
        <div className="App">
          <div className="content">
            <Router>

            <nav className="nav">
                <NavLink to="/">
                </NavLink>

                <div className="container-search">
                  <button className="button-search-comic">
                  </button>
                  <input
                    className="searchInput"
                    onChange={(e) => searchComics(e)}
                    type="text"
                  />
                </div>

                <div className="container-cart">
                  <ul className="ul">
                    {jwt && (
                      <li>
                        <NavLink to="/">Home</NavLink>
                      </li>
                    )}
                    {!jwt && (
                      <>
                        <li>
                          <NavLink to="/login">Login</NavLink>
                        </li>
                        <li>
                          <NavLink to="/register">Register</NavLink>
                        </li>
                      </>
                    )}
                  </ul>

                  {jwt && <ButtonLogOut />}
                  {jwt && <ShoppingCart />}

                </div>
              </nav>

              <Routes>
                <Route
                  path="/"
                  element={
                      <AuthenticationReq>
                    <Home
                      comics={search.length > 0 ? search : comics}
                      searchComic={searchComics}
                    />
                    </AuthenticationReq>
                  }
                />
                <Route path='/' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='comic-details/:id' element={<ComicDetails />} />
                <Route path='cart' element={<Cart />} />
              </Routes>
        </Router>
          </div>
          <Footer />
        </div>
      </JwtContext.Provider>
    </ComicProvider>
  );
}

export default App;