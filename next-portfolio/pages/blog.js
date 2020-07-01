import Link from 'next/link'

import Layout from '../components/Layout'

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={slug} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => (
  <Layout title="Blog">
    <ul>
      <PostLink slug="react-post" title="react" />
      <PostLink slug="angular-post" title="angular" />
      <PostLink slug="vue-post" title="vue" />
    </ul>
  </Layout>
)

export default Blog
