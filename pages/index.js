import Head from 'next/head'

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>This is my homepage.</div>
    </div>
  )
}

// Need to use getInitialProps to know whether homepage was loaded in client or server side
// process.browser returns true if rendered on client side, and false if rendered on server side
Home.getInitialProps = (context) => {
  console.log('browser', process.browser);
  return {
      test: 'testing'
  }
}

export default Home
