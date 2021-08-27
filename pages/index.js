import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Features from '../components/features'
import Intro from '../components/intro'
import Content from '../components/contents'
import Details from '../components/details'
import Subscribe from '../components/subscribe'
import BookReview from '../components/book-review'
import Profile from '../components/profile'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Book landing page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />

      <Features />
      <Content />
      <Details />

      <Subscribe />
      <BookReview />
      <Profile />

      <div className='footer'>


        <p>Chisom Prince transforms ideas to reality ❤</p>
        <p> CTIR © 2021</p>
      </div>

    </div>
  )
}
