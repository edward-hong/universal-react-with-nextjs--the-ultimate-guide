import { useState } from 'react'
import Router from 'next/router'

import { loginUser } from '../lib/auth'

const LoginForm = () => {
  const [email, setEmail] = useState('Sincere@april.biz')
  const [password, setPassword] = useState('hildegard.org')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleChangeEmail = (e) => setEmail(e.target.value)
  const handleChangePassword = (e) => setPassword(e.target.value)

  const showError = (err) => {
    console.error(err)
    const error = (err.response && err.response.data) || err.message
    setError(error)
    setIsLoading(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)
    loginUser(email, password)
      .then(() => {
        Router.push('/profile')
      })
      .catch(showError)
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
      <button disabled={isLoading} type="submit">
        {isLoading ? 'Sending...' : 'Submit'}
      </button>
      {error && <div>{error}</div>}
    </form>
  )
}

export default LoginForm
