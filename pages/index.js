import { useUser } from '../lib/hooks'
import Calculator from '../components/calculator'

const Home = () => {
  const user = useUser()

  return (
    <>
      <div className="mb-5"/>
      <Calculator/>

      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </>
  )
}

export default Home
