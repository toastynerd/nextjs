import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chess Cocks!</title>
      </Head>

      <h1 className={styles.title}>
        It's a chess!
      </h1>

      <main className={styles.main}>
        <img src="./david.jpg" alt="david" className={styles.superimage}/>
        <img src="./tyler.jpg" alt="tyler" className={styles.superimage} />
      </main>
    </div>
  )
}
