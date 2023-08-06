import { useUser } from '../lib/hooks'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <>
      <h1 className="display-4">Profile</h1>
      <div className="my-3">
      {user && <p class="lead">Welcome {user.username}!</p>}
      </div>

      <style jsx>{`
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  )
}

export default Profile
