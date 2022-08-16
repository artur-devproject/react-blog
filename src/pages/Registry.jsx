import { useContext } from "react";
import { Navigate } from "react-router-dom";
import MyButton from "../components/UI/button/MyButton";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";

export default function Registry () {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    function submit(event) {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('userName', event.target.name.value)
    }

    return (
        isAuth 
            ? <h1>You are loged in as {localStorage.getItem('userName')}</h1>
            :
        <div>
            <h1>You have not registered yet</h1>
            <form onSubmit={submit} className="regForm">
                <label>Please, enter your name to open the App</label>
                <MyInput id="name" required minLength={3} type="text" 
                    placeholder="Enter your name here..." />
                <MyButton>Log In</MyButton>
            </form>
        </div>
        
    )
}