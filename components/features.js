const data = [
    {
        img: '/book-open.svg',
        title: 'Describe the features of your text',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/book-open.svg',
        title: 'Describe the features of your text',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/book-open.svg',
        title: 'Describe the features of your text',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/book-open.svg',
        title: 'Add a feature',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/book-open.svg',
        title: 'Add a feature',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/book-open.svg',
        title: 'Add a feature',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
]

export default function Features() {
    return (
        <div >


            <div>
                <h1 style={{ textAlign: "center" }}> What you will get if you purchase this book</h1>
                <p style={{ textAlign: "center" }}>
                    princeple of fiancial management is an educastion literature to empower and promote
                    knowlege on finance some of the benefit include
            </p>
            </div>
            <div className='features-tiles'>

                {
                    data.map((item) => (
                        <div className='features-items'>
                            <img src={item.img} alt='image' width='50px' />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                        </div>))
                }
            </div>
        </div>
    )
}