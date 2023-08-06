import { useUser } from '../lib/hooks'
import Calculator from '../components/calculator'

const Home = () => {
  const user = useUser()

  return (
    <>
      <div className="my-3">
      </div>
      <Calculator/>

    </>
  )
}

export default Home
