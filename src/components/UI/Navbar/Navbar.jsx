import React, { useContext } from 'react'
import "../../App/style//App.css"
import { Link } from "react-router-dom";
import MyButton from '../btn/MyButton';
import { Authcontext } from '../../../context';

 function Navbar() {

    const {isAuth, setIsAuth} = useContext(Authcontext)

    const logout = () => {
      setIsAuth(false)
      localStorage.removeItem("auth")
    }

    return (
        <div className="navbar">
          <MyButton onClick={logout}>
            Exit
          </MyButton>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
      </div>
    )
}

export default Navbar