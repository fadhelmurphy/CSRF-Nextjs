import { NextResponse, NextRequest } from "next/server"

var CryptoJS = require("crypto-js");
export async function middleware(req) {
	const authToken = req.cookies["auth-token"]
	
	const bytes  = CryptoJS.AES.decrypt(authToken, `${process.env.API_KEY}`);
	const originalText = bytes.toString(CryptoJS.enc.Utf8);

	if(originalText.length === 0){
		return new Response({ message: 'Fuck off' }, { status: 404 });
	}

  // If user is authenticated, continue.
  return NextResponse.next();
}