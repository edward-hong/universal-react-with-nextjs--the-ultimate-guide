import { useState, useEffect } from 'react'

import { getUserProfile } from '../lib/auth'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserProfile().then((user) => setUser(user))
  }, [])

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}

export default Profile
