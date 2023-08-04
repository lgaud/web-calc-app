import { useUser } from '../lib/hooks'
import Calculator from '../components/calculator'
import 'bootstrap/dist/css/bootstrap.css'


const Home = () => {
  const user = useUser()

  return (
    <>
      <h1>Web Calc</h1>

      <Calculator/>

      {user && (
        <>
          <p>Currently logged in as:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}

      <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
    </>
  )
}

export default Home
