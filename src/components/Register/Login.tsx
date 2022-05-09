import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../../context/AuthProvider";
import { login } from '../../features/userSlice';
import { useAppDispatch } from '../../app/hooks';
import "./Login.css"

import axios from '../../apis/axios';

const LOGIN_URL = '/auth/login';
const LoginPage = () => {
    
    const { setAuth }:any = useContext(AuthContext);
    const userRef:any = useRef();
    const errRef:any = useRef();

    const [email, setUser] = useState('');
    const [password, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])
    
    const handleSubmit = async (e:any) => {
        e.preventDefault();
        /*dispatch(
            login({
              loggedIn:true, //returns info that user is loggedIn (see UserSlicer)
              email:email, //returns email. We use to show who is logged in 
            }),
          );*/

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ email, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            //const accessToken = document.cookie;
            setAuth({ email, password,/*accessToken*/ });
            setUser('');
            setPwd('');
            setSuccess(true);
            //console.log(accessToken)
        } catch (err:any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }
    const dispatch = useAppDispatch();//To dispatch if success? is true
    return (
        < div className="loginApp">  
            {success ? (
                
                
                dispatch(
                    login({
                      loggedIn:true, //returns info that user is loggedIn (see UserSlicer)
                      email:email, //returns email. We use to show who is logged in 
                    }),
                  ),

                <section className='loginSection'>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className='loginSection'> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='loginH1'>Sign In</h1>

                    <form className='LoginForm' onSubmit={handleSubmit}>
                        <label className="loginLabel">Username:</label>
                        <input 
                            className="loginInput"
                            type="text"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={email}
                            required
                        />

                        <label className="loginLabel">Password:</label>
                        <input
                            className="loginInput"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={password}
                            required
                        />
                        <button className='loginButton' >Sign In</button>
                    </form>
                    <p className='loginP'>
                        Need an Account?<br />
                        <span className="line">
                            <a href="/create_account">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </div>
    )
}

export default LoginPage