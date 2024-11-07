import { useEffect, useState } from 'react'

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  useEffect((e)=>{

  }, email)

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  return (
    <form 
      onSubmit={e=>e.preventDefault()}
      className='card'
      >
      <h1>Logowanie</h1>
      <hr />
      <div className="input-container">
        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          name="email" 
          placeholder='Podaj email'
          value={email}
          onChange={handleEmailChange}
          className='form-control'
          />
      </div>
      <div className="input-container">
        <label htmlFor="password">Hasło</label>
        <input 
          type="password" 
          name="password" 
          placeholder='Podaj hasło'
          onChange={handlePasswordChange}
          className='form-control'
          />
      </div>
      <button type='submit' className='btn btn-primary'>Zaloguj</button>
    </form>
  )
}

export default LoginForm;
