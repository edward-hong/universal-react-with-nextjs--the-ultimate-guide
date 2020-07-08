import { useState, useEffect } from 'react'

import Layout from '../components/Layout'
import { getUserProfile } from '../lib/auth'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getUserProfile().then((user) => setUser(user))
  }, [])

  return (
    <Layout title="Profile">
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </Layout>
  )
}

export default Profile
