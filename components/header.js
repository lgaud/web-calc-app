import Link from 'next/link'
import { useUser } from '../lib/hooks'

import {ErrorBoundary} from "react-error-boundary"

const Header = () => {
  const user = useUser()

  return (
    <ErrorBoundary>
    <header className="p-3 bg-primary text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <span className="display-6 col">Web Calc</span> 
          <ul className="nav text-end">
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
        </div>
      </div>
      
    </header>
    </ErrorBoundary>
  )
}

export default Header
