import { useNavigate } from 'react-router-dom';
import './Login.css';
import {useState} from 'react';
function Login() {
    const [emailInput,setEmailInput] = useState("");
    const [passwordInput,setPasswordInput] = useState("");
    const navigate1 = useNavigate();


    // email
    function useremail1(event) {
       setEmailInput(event.target.value);
    }
    // password
    function userpassword1(event) {
        setPasswordInput(event.target.value)
    }

    // form
    function formsubmit() {
        localStorage.setItem("Email",emailInput);
        localStorage.setItem("Password",passwordInput);
        navigate1('/home');
    }

    function signuppage() {
        navigate1("/")
    }
    return(
        <div className="login">
            <h1>Welcome Back</h1>
            <p className="penter">Enter your Credential to Login</p>
           <form className="loginform" onSubmit={formsubmit}>

              <input type="email" placeholder="Email" required onChange={useremail1}/>

              <input type="password" placeholder="Password" required onChange={userpassword1}/>

              <button type="submit" className="submitlogin">Login</button>

              <p className="pforgot">Forgot password?</p>
              <p className="pdont">Dont have an account? <span onClick={signuppage}>Sign up</span></p>
           </form>
        </div>
    );
}
export default Login;