import fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'

const About = ({ user }) => {
  return (
    <Layout title="About">
      <p>{user.login}</p>
      <img src={user.avatar_url} alt="Edward" height="200px" />
    </Layout>
  )
}

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/edward-hong')
  const json = await res.json()
  return { user: json }
}

export default About
