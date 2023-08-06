import Head from 'next/head'
import Header from './header'

const Layout = (props) => (
  <>
    <Head>
      <html lang="en" />
      <title>Web Calc</title>
    </Head>

    <Header />

    <main>
      <div className="container">{props.children}</div>
    </main>
  </>
)

export default Layout
