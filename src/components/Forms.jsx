import { useState } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

import Navbar from './Navbar';

function Forms() {
  const [formState, setFormState] = useState('login');

  function updateState(newStateValue){
    setFormState(newStateValue);
  }

  return (
    <>
      <Navbar updateState={updateState}/>
      <main>
      {formState == 'login' ? <LoginForm/> : <RegisterForm/>}
      </main>
    </>
  )
}

export default Forms;
