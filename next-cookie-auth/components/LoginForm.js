import { useState } from 'react'

import { loginUser } from '../lib/auth'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(email, password)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChangeEmail}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChangePassword}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
