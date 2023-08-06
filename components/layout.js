import Head from 'next/head'
import Header from './header'

import {ErrorBoundary} from "react-error-boundary"

const Layout = (props) => (
  <ErrorBoundary>
    <Head>
      <html lang="en" />
      <title>Web Calc</title>
    </Head>

    <Header />

    <main>
      <div className="container">{props.children}</div>
    </main>
  </ErrorBoundary>
)

export default Layout
