import { getLoginSession } from '../../lib/auth'
import { findUser } from '../../lib/user'

export default async function user(req, res) {
  try {
    const session = await getLoginSession(req)
    const user = (session && (await findUser(session))) ?? null

    // Don't return sensitive info to client!
    if(user !== null) {
      res.status(200).json({ user: {username: user.username, history: user.history} })
    }
    else {
      res.status(200).json({ user: null })
    }
        
  } catch (error) {
    console.error(error)
    res.status(500).end('Authentication token is invalid, please log in')
  }
}
