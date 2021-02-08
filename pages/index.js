import Head from 'next/head';
import nookies from 'nookies';

export const getServerSideProps = (context) => {
  // Get selectedCountry from cookie
  const { selectedCountry } = nookies.get(context);
  const countryCode = context.query.country || selectedCountry || 'jp';
  // Redirect on server side
  context.res.writeHead(302, { Location: `/${countryCode}` });
  context.res.end();

  return {
    props: {
      finished: true
    }
  }
}

const Home = (props) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
