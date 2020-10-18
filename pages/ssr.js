import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'

export default function SSR({ headers }) {
  return (
    <Layout>
      <Head>
        <title>Rendered on the server</title>
      </Head>
      <h1>Rendered on the server</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <div>{JSON.stringify(headers)}</div>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  console.log('in getServerSideProps', { context })
  const { headers } = context.req
  return {
    props: {
      headers
    }
  }
}