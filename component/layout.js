import Head from 'next/head'
import Navigation from './navigation'

function Layout({ children }) {
    return <div>
        <Head>
            <title>Ozan ın web sitesi</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"></meta>
            </Head>
        <Navigation />
        <main>
            {children}
        </main>
        <footer>
            design by ozan
        </footer>
    </div>
}
export default Layout