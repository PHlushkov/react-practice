import React, { useContext } from 'react'
import { Route, Routes, redirect } from 'react-router-dom'
import Error from '../../../pages/Error'
import { privateRoutes, publickRoutes } from '../../../router'
import Login from '../../../pages/Login'
import { Authcontext } from '../../../context'
import Posts from '../../../pages/Posts'

function AppRouter() {
    
    const {isAuth} = useContext(Authcontext)
    console.log(isAuth);

    return (
        isAuth
            ?
        <Routes>
           {privateRoutes.map((route, i) => 
                <Route 
                    key={i} 
                    path={route.path} 
                    element={route.component} 
                    exact={route.exact}
                />
            )}
            <Route path="*" element={<Error/>}/>
      </Routes>
      :
      <Routes>
            {publickRoutes.map((route, i)=>
            <Route
                key={i}
                path={route.patch}
                element={route.component}
                exact={route.exacte}
            />
            )}
            <Route path="*" element={<Login/>}/>
            {/* {redirect("login")} */}
            
      </Routes>
    )
}

export default AppRouter
