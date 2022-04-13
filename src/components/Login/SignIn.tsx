import React, {useState} from 'react';
/*import { useDispatch } from 'react-redux';*/
import { useAppDispatch } from '../../app/hooks';
import { useLoginMutation } from '../../apis/auth.api';
import { useCreateUserMutation } from '../../apis/users.api';
import { User } from '../../models/User';
import { login } from '../../features/userSlice';
import "../../Styles/Login.css"
import {useNavigate } from 'react-router';
import { setAuthState } from '../../slices/auth.slice';
export {}

const SignIn=()=> {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser] = useCreateUserMutation();/*CONNECTING TO BACKEND */
  /*const dispatch = useDispatch();*/

  const [loginuser] =useLoginMutation();
  const navigate = useNavigate(); 
  const dispatch = useAppDispatch();


  const handleSubmit = async (e:any) => {
    e.preventDefault();
    
 
    dispatch(
      login({
        name:name,
        email:email,
        password:password,
        loggedIn:true,
      })
    );
    try{
      await createUser({email, password}) /*CONNECTING TO BACKEND */
      const response = (await loginuser({email,password})) as {data:User};
      dispatch(setAuthState({user:response.data}));
      navigate("/");
    } catch (err){
      console.error(err);
    }
    
  };
  

  return(
    <div className='login'>
      <form className="login_form" onSubmit={function(e){handleSubmit(e)}}>
        
        <h1>You Can Sign In Here</h1>
        <input 
        type="name"
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
        /> 
        
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
    </div>
    

  );  ;
}

export default SignIn;
