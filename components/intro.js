import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/nav'
import Recommendation from './recommendations'



export default function Intro() {
    return (

        <div className='intro'>
            <div className='intro-1'>
                <h1 className='intro-h1'>
                    Free Book and Ebook Landing Page Template
                    </h1>
                <p className='intro-p'>
                    Free Book Landing Page made by Chisom For developers and Publidhers
                    Who want to self Publish Books, Made WIth React And Strapi, download
                    or manage your sell via Gumroad.
                    </p>
                <div>
                    <button className='colored-Btn'>Buy now for $20 </button>
                    <button className='uncolored-Btn'>Learn More </button>
                </div>

                <Recommendation />
            </div>

            <div className='intro-2'>
                <img src='/devbook-cover.png' alt='book-cover' className='cover-img' />
            </div>
        </div>




    )
}
