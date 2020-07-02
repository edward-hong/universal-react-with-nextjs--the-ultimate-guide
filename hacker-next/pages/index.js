import Error from 'next/error'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import StoryList from '../components/StoryList'

const Index = ({ stories }) => {
  if (stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <Layout
      title="Hacker Next"
      description="A Hacker News clone made with Next.js"
    >
      <StoryList stories={stories} />
    </Layout>
  )
}

Index.getInitialProps = async () => {
  let stories
  try {
    const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1')
    stories = await response.json()
  } catch (err) {
    console.log(err)
    stories = []
  }

  return { stories }
}

export default Index
