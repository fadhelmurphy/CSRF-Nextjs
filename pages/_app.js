import axios from 'axios'
import App from 'next/app'
import Cookies from 'js-cookie'
import { makeid } from '../utils/utils'
var CryptoJS = require("crypto-js");

function MyApp({ Component, pageProps }) {
//   axios.defaults.headers = {
//     'CSRF-Token': pageProps.csrfToken
// }

// Cookies.set('auth-token', pageProps.csrfToken, {
//   secure: true
// })
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async ({ctx}) => {
  //Check if I am in the server.
  if (ctx.req) {
      // await csrf(ctx.req, ctx.res)
      var ciphertext = CryptoJS.AES.encrypt(makeid(5), 'sekut').toString();
      ctx.res.setHeader('Set-Cookie', `auth-token=${ciphertext}; HttpOnly; Secure; SameSite`);
      // const cookies = new Cookies(ctx.req, ctx.res)
       
  }

  //Return pageProps to the page with the authenticted user information.
  return { pageProps: { csrfToken: ciphertext } };

};

export default MyApp
