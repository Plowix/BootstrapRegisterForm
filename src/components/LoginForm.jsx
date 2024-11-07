import { useState } from 'react'

function LoginForm() {
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
          className='form-control'
          />
      </div>
      <div className="input-container">
        <label htmlFor="password">Hasło</label>
        <input 
          type="password" 
          name="password" 
          placeholder='Podaj hasło'
          className='form-control'
          />
      </div>
      <button type='submit' className='btn btn-primary'>Zaloguj</button>
    </form>
  )
}

export default LoginForm;
