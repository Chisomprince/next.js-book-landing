
const data = [
    {
        img: '/aaron.jpg',
        title: 'Aaron Mattew',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/aaron.jpg',
        title: 'Aaron Elijah',
        description: ' Higly recommended awesome book, i really love this book especially on the way it tackles compepulary issues relating to finance and programing at large i urge to to buy nad benefit'
    },
    {
        img: '/aaron.jpg',
        title: 'Nkirinwashi John',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/aaron.jpg',
        title: 'Dickson Mattew',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/aaron.jpg',
        title: 'Mac-Anthony Philips',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/aaron.jpg',
        title: 'Frank Odoyewu',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
]
export default function BookReview() {
    return (
        <div className='book-review'>


            <h2>Get A Free Preview</h2>
            <p >
                Sign up to a free preview of the book,

                You can offer visitors free book previews
                to generate leads
            </p>



            {
                data.map(item =>
                    <div className='review-item'>
                        <div >


                            <p style={{ fontStyle: 'italic' }}>
                                {item.description}
                            </p>
                        </div>

                        <div className='recomm'>

                            <img src={item.img} alt='aaron image' className='recomm-img' />
                            <div className='recomm-author'>
                                <p className='author-p'>{item.title}</p>
                                <p className='author-p'>Senior Radiographer, Aaron inc.</p>
                            </div>
                        </div>


                    </div>
                )

            }

            <div style={{ margin: 0 }}>
                <button className='colored-Btn'>
                    Get Your Copy Today
                            </button>
            </div>
        </div>
    )
}
