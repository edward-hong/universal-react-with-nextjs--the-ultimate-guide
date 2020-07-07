import { useState } from 'react'
import Router from 'next/router'

import { loginUser } from '../lib/auth'

const LoginForm = () => {
  const [email, setEmail] = useState('Sincere@april.biz')
  const [password, setPassword] = useState('hildegard.org')

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(email, password).then(() => {
      Router.push('/profile')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChangeEmail}
          value={email}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChangePassword}
          value={password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default LoginForm
