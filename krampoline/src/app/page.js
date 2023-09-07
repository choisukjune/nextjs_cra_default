import Head from 'next/head';
import Link from 'next/link';
import Nav from './components/Nav';

const styles = {
  layout: {
      display: 'flex',
      width: '100%',
      height: '100%',
      flexDirection: 'column',
  },
  header: {
      height: 60,
  },
  main: {
      flex: 1,
  },
  footer: {
      height: 60,
  },
  divider: {
      margin: '0 8px',
  },
}

export default function Home() {
  return (
    <>
    <Head>
    <title>Static Website</title>
    </Head>
    <div style={styles.layout}>
        <Nav/>
        <main style={styles.main}>
            <h1>NEXTJS - CRA - Home</h1>
        </main>
        <footer style={styles.footer}>Footer</footer>
    </div>
    </>
    
  )
}
