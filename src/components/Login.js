import axios from "axios";
import sweetAlert from "@sweetalert/with-react";
import { useNavigate } from 'react-router-dom';

function Login() {

    const navigate = useNavigate(); 

    const submitHandler = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(email === '' || password === '') {
            sweetAlert(
                <h2>
                    Please provide the all login data
                </h2>
            )
            console.error('')
            return;
        }

        if(email !== '' && !regexEmail.test(email)) {
            sweetAlert(
                <h2>
                    Please provide a valid email address
                </h2>
            )
            return
        }
        
        if(email !== 'challenge@alkemy.org' || password !== 'react') {
            sweetAlert(
                <h2>
                    The provided credentials do not match with our database
                </h2>
            )
            return 
        }

        axios
            .post('http://challenge-react.alkemy.org', {email, password})
            .then(response => {
                const token = response.data.token;
                console.log("🚀 ~ file: Login.js:48 ~ submitHandler ~ token:", token)
                localStorage.setItem('token', token);
                navigate('/list'); 
            })
            .catch(error => {
                sweetAlert(
                    <h2>
                        An error occurred
                    </h2>
                )   
              });
    }

    return (
        <>
            <h2>
                Provide your login data
            </h2>
            <form onSubmit={submitHandler}>
                <label>
                    <span>
                        Email:
                    </span>
                    <br />
                    <input type="email" name="email" />
                </label>
                <br />
                <br />
                <label>
                    <span>
                        Password:
                    </span>
                    <br />
                    <input type="password" name="password" />
                </label>
                <br />
                <br />
                <button type="submit">Enter</button>
            </form>
        </>
    )
}

export default Login;