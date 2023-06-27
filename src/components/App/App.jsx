import React, { useEffect, useState } from "react";
import "./style/App.css"
import { BrowserRouter} from "react-router-dom";
import Navbar from "../UI/Navbar/Navbar";
import AppRouter from "../UI/AppRouter/AppRouter";
import { Authcontext } from "../../context";

function App() {

  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    if(localStorage.getItem("auth")) {
      setIsAuth(true)
    }
  }, [])

  return (
    <Authcontext.Provider value={{
      isAuth,
      setIsAuth,
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
    </BrowserRouter>
    </Authcontext.Provider>
  )
}

export default App;
