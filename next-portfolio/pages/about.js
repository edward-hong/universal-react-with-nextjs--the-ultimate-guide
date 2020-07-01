import fetch from 'isomorphic-unfetch'

import Error from './_error'
import Layout from '../components/Layout'

const About = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />
  }

  return (
    <Layout title="About">
      <p>{user.login}</p>
      <img src={user.avatar_url} alt="Edward" height="200px" />
    </Layout>
  )
}

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/edward-hong')
  const statusCode = res.status > 200 ? res.status : false
  const json = await res.json()
  return { user: json, statusCode }
}

export default About
