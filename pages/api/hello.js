import Cookies from 'js-cookie'
import { parseCookie } from '../../utils/utils';
var CryptoJS = require("crypto-js");

export default async function handler(req, res) {
	const authToken = parseCookie(req.headers.cookie)["auth-token"];
	
	const bytes  = CryptoJS.AES.decrypt(authToken, 'sekut');
	const originalText = bytes.toString(CryptoJS.enc.Utf8);

	if(originalText.length > 0){
		res.status(200).json({ message: 'Success with CSRF Protection' })
	}else{
		res.status(401).json({ message: 'Fuck off' })
	}
}
