import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import Cookies from 'js-cookie'

// var CryptoJS = require("crypto-js");

export default function Home({ciphertext}) {
	const dummyCall = (withHeader = true) => {
		if(!withHeader){
			Cookies.set("auth-token","SALAH-TOKEN")
		}else{
			Cookies.set("auth-token",ciphertext)
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
