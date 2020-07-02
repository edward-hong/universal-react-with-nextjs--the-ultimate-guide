import { withRouter } from 'next/router'

import Layout from '../components/Layout'

const Post = ({ router }) => (
  <Layout title={router.query.title}>
    <p style={{ width: '80vw' }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
      quibusdam impedit porro cupiditate voluptatem, ipsam reiciendis
      perspiciatis, dolorem inventore adipisci rerum. Sequi, earum est facere
      magnam pariatur illo ab porro.
    </p>
  </Layout>
)

export default withRouter(Post)
