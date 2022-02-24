import { clearCookie } from '../../utils/api'

export default function handler(req, res) {
  // clear the cookie return 200
  clearCookie(res, { name: 'token'})
  res.status(200).send('')
}