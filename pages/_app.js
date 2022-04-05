import axios from 'axios'
import App from 'next/app'
import csrf from '../src/csrf'

function MyApp({ Component, pageProps }) {
  axios.defaults.headers = {
    'CSRF-Token': pageProps.csrfToken
}
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ctx}) => {
  //Check if I am in the server.
  if (ctx.req) {
      await csrf(ctx.req, ctx.res)
       
  }

  //Return pageProps to the page with the authenticted user information.
  return { pageProps: { csrfToken: ctx.req.csrfToken() } };

};

export default MyApp
