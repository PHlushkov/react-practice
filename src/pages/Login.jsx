import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/btn/MyButton'
import { Authcontext } from '../context'

function Login() {
    
    const {isAuth, setIsAuth} = useContext(Authcontext)
    const login = (e) => {
        e.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', 'true')
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='Login' />
                <MyInput type="password"  placeholder='Password'/>
                <MyButton>Sign in</MyButton>
            </form>
        </div>
    )
}

export default Login