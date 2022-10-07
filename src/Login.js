import { Button } from '@mui/material';
import React from 'react';
import './Login.css';
import { auth, provider } from './firebase';
import { actionTypes } from './reducer';
import { useStateValue } from './StateProvider';
import { signIn as signin } from './axios';
function Login() {
  const [state, dispatch] = useStateValue();
  const [name, setName] = React.useState(''),
    [password, setPassword] = React.useState('');

  const signIn = React.useCallback(
    () =>
      signin({
        username: name,
        password,
        profilePic: 'profile',
        email: name.includes('@') ? name : name.toLowerCase() + '@gmail.com',
      })
        .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          });
          console.log(result);
        })
        .catch((error) => alert(error.message)),
    [name, password, dispatch]
  );
  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://img01.techsoft.co.uk/o/ts/LayoutImages/FacebookLogo.png'
          alt=''
        />

        <img
          style={{ height: '50px', marginTop: '50px' }}
          src='https://th.bing.com/th/id/OIP.v3L3OxHd_Wq671UhFRq9nAHaB_?w=305&h=93&c=7&r=0&o=5&dpr=1.25&pid=1.7'
          alt=' '
        />
      </div>
      <form>
        <input
          type='text'
          placeholder='username'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <Button type='submit' onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
