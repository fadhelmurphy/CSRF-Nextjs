import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'

// var CryptoJS = require("crypto-js");

export default function Home({ciphertext,cipher}) {
	const dummyCall = (withHeader = true) => {
		if(!withHeader){
			Cookies.set("auth-token","SALAH-TOKEN")
			Cookies.set("cipher","cipher")
		}
		else{
			Cookies.set("auth-token",ciphertext)
			Cookies.set("cipher",cipher)
		}
		axios({
			method: 'post',
			url: '/api/hello',
			params: {},
		  })
		  .then((res) => alert(`Joss! ${res.data.message}`))
		  .catch(() => alert('Not protected'))
  }

	return (
		<div className={styles.container}>
			<Head>
				<title>CSRF Protection in Next.js</title>
				<meta name="description" content="CSRF Protection in Next.js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<h1 className={styles.title}>CSRF Protection in Next.js</h1>

			<button onClick={dummyCall} type="button">
				Dummy Call With CSRF Header
			</button>
			<button onClick={() => dummyCall(false)} type="button">
				Dummy Call Without CSRF Header
			</button>
			<Link href="/">
          <a>Home</a>
        </Link>
		</div>
	)
}

// export async function getServerSideProps(context) {
// 	const { req, res } = context
// 	await csrf(req, res)
// 	return {
// 		props: { csrfToken: req.csrfToken() },
// 	}
// }
