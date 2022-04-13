

export default async function handler(req, res) {
	res.status(200).json({ message: 'Success with CSRF Protection' })
}
