import csrf from '../../src/csrf'
export default async function handler(req, res) {
	try {
		await csrf(req, res)
	} catch (e) {
		res.status(401).json({ message: 'Fuck off' })
	}
	res.status(200).json({ message: 'Success with CSRF Protection' })
}
