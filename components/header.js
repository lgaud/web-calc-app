import Link from 'next/link'
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  return (
    <header>
      <nav className="py-2 px-5 bg-dark border-bottom d-flex justify-content-end">
        <ul className="nav">
          <li className="nav-item">
            <Link href="/" legacyBehavior>
              <a className="nav-link link-light px-2">Home</a>
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <Link href="/profile" legacyBehavior>
                  <a className="nav-link link-light px-2">Profile</a>
                </Link>
              </li>
              <li>
                <a className="nav-link link-light px-2" href="/api/logout">Logout</a>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <Link href="/login" legacyBehavior>
                <a className="nav-link link-light px-2">Login</a>
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
