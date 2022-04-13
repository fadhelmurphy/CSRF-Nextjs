import axios from 'axios'
import App from 'next/app'
import { makeid } from '../utils/utils'
var CryptoJS = require("crypto-js");

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MyApp.getInitialProps = async (props) => {
  const {ctx} = props
  //Check if I am in the server.
  if (ctx.req) {
      var ciphertext = CryptoJS.AES.encrypt(makeid(5), `sekut`).toString();
      // ctx.res.setHeader('Set-Cookie', `auth-token=${ciphertext}; Secure; SameSite=Strict`);
       
  }
  const appProps = await App.getInitialProps(props);

  //Return pageProps to the page with the authenticted user information.
  return { ...appProps,pageProps: { ...appProps.pageProps, ciphertext } }
  // return { pageProps: { csrfToken: ciphertext } };

};

export default MyApp
