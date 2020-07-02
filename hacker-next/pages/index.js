import Error from 'next/error'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import StoryList from '../components/StoryList'

const Index = ({ stories, page }) => {
  if (stories.length === 0) {
    return <Error statusCode={503} />
  }
  return (
    <Layout
      title="Hacker Next"
      description="A Hacker News clone made with Next.js"
    >
      <StoryList stories={stories} />
      <footer>
        <Link href={`/?page=${page + 1}`}>
          <a>Next Page ({page + 1})</a>
        </Link>
      </footer>

      <style jsx>{`
        footer {
          padding: 1em;
        }

        footer a {
          font-weight: bold;
          color: black;
          text-decoration: none;
        }
      `}</style>
    </Layout>
  )
}

Index.getInitialProps = async ({ req, res, query }) => {
  let stories, page
  try {
    page = Number(query.page) || 1
    const response = await fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`,
    )
    stories = await response.json()
  } catch (err) {
    console.log(err)
    stories = []
  }

  return { stories, page }
}

export default Index
