import React, {useState} from 'react';
/*import { useDispatch } from 'react-redux';*/
import { useAppDispatch } from '../../app/hooks';
import { Link} from 'react-router-dom';
import {useNavigate } from 'react-router';
import { useLoginMutation } from '../../apis/auth.api';
import { login } from '../../features/userSlice';
import { User } from '../../models/User';
import { setAuthState } from '../../slices/auth.slice';
import "../../Styles/Login.css"

const Login=()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [userlogin] = useLoginMutation();/*Send to backend*/
  const navigate = useNavigate(); /*Using navigate to navigaye to homepage once loggedin */
  
  
 /* const dispatch = useDispatch();bylo useDispatch */
  const dispatch = useAppDispatch();
  const handleSubmit = async (e:any) => {
      console.log("submit")
    e.preventDefault();
    dispatch(
      login({
        email:email,
        password:password,
        loggedIn:true
      }),
    );
    try{
      const response = (await userlogin({email, password})) as {data:User}/*Send to backend*/
      dispatch(setAuthState({user:response.data}));

      
      navigate('/') /*Przeniesie na na Home gdy sie zalogujemy */
    } catch (err){
      console.error(err);
    }
    
  };
  
  return(
    <div className='login'>
      <form className="login_form" onSubmit={function(e){handleSubmit(e)}}>
        
        <h1>You Can Login Here</h1>
        
        <input type="email"
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}/>
       
        <input 
        type="password" 
        placeholder='Password' 
        value={password}  
        onChange={(e) => setPassword(e.target.value)}/>

        <button type="submit" className='submit_btn' >
        Submit</button>
        
      </form>
      <div  className='login-link' >
        Need New Account? <Link to="/signin">Sign In Now</Link></div>
    </div>
    

  );  ;
}

export default Login;
