import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
export default function Home() {
  return (
    <>
    <Head>
      <title>Ninja List | Home</title>
      <meta name="keywords" content="ninjas"/>
    </Head>
        <div>
          <h1 className={styles.title}>Home Page</h1>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sunt tempora sequi vitae veniam esse iusto animi eos commodi tempore odit, ullam ex cum? Repellendus quos corrupti facere similique laborum.</p>
          <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab excepturi tempora provident dolores placeat doloremque sequi ea debitis eos nesciunt vero quidem quaerat facilis soluta, obcaecati repellendus maiores laborum veritatis?</p>
          <Link href="/ninjas">
            <a className={styles.btn}>See Ninja Listing</a>
          </Link>

        </div>
        </>
    )
}
