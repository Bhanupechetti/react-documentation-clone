import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css';

function Singup() {
    const [nameInput,setNameInput] = useState("");
    const [emailInput,setEmailInput] = useState("");
    const [passwordInput,setPasswordInput] = useState("");
    const [confirmpwInput,setConfirmpwInput] = useState("");
    const navigate = useNavigate();

    // name
    function username(event) {
        setNameInput(event.target.value);
    }
    // email
    function useremail(event) {
        setEmailInput(event.target.value);
    }
    // password
    function userpassword(event) {
        setPasswordInput(event.target.value);
    }
    // confirm
    function userconfirmpw(event) {
        setConfirmpwInput(event.target.value);
    }

    // form
    function handlesubmit() {
        localStorage.setItem("Name",nameInput);
        localStorage.setItem("Email",emailInput);
        localStorage.setItem("Password",passwordInput);
        localStorage.setItem("Confirm password",confirmpwInput);
        navigate("/login");
    }

    function loginpage() {
        navigate("/login");
    }
    return(
        <div className="singup">
            <div className="signupmatter">
                <form className="signupform" onSubmit={handlesubmit}>
                    <h2>Sign up</h2>
                    <p className="pcreate">Create your Accout</p>

                    <input type="text" placeholder="Username" required onChange={username}/>

                    <input type="email" placeholder="Email" required onChange={useremail}/>

                    <input type="password" placeholder="password" required onChange={userpassword}/>

                    <input type="password" placeholder="Confirm password" required onChange={userconfirmpw}/>

                    <button type="submit" className="submit">Sign up</button>
                    <p >OR</p>
                    <button className="button">Sign in with Google</button>
                    <p>Already have an Accout?<span onClick={loginpage}>Login</span></p>
                </form>
            </div>
        </div>
    );
};
export default Singup;