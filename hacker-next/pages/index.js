import Error from 'next/error'
import fetch from 'isomorphic-fetch'

import StoryList from '../components/StoryList'

const Index = ({ stories }) => {
  if (stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <div>
      <h1>Hacker Next</h1>
      <StoryList stories={stories} />
    </div>
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
