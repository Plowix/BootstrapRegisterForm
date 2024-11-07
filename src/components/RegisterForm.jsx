import { useState } from 'react'

function RegisterForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({

  });

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleSurnameChange = (event) => {
    setSurname(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  }

  return (
    <form 
      onSubmit={e=>e.preventDefault()}
      className='card'>
      <h1>Rejestracja</h1>
      <hr />
      <div className="input-container">
        <label htmlFor="name">Imię</label>
        <input 
          type="text" 
          name="name" 
          placeholder='Podaj imię'
          value={name}
          onChange={handleNameChange}
          className='form-control'
          />
      </div>
      <div className="input-container">
        <label htmlFor="surname">Nazwisko</label>
        <input 
          type="text" 
          name="surname" 
          placeholder='Podaj nazwisko'
          value={surname}
          onChange={handleSurnameChange}
          className='form-control'
          />
      </div>
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
          value={password}
          onChange={handlePasswordChange}
          className='form-control'
          />
      </div>
      <div className="input-container">
        <label htmlFor="confirm-password">Potwierdź hasło</label>
        <input 
          type="password" 
          name="confirm-hasło" 
          placeholder='Potwierdź hasło '
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className='form-control'
          />
      </div>
      <button type='submit' className='btn btn-primary'>Zarejestruj</button>
    </form>
  )
}

export default RegisterForm;
