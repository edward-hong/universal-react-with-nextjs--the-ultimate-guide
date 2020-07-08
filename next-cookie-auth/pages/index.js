import Link from 'next/link'

import Layout from '../components/Layout'

const Index = () => (
  <Layout title="Home">
    <Link href="/profile">
      <a>Go to Profile</a>
    </Link>
  </Layout>
)

export default Index
