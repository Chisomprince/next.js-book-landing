const data = [
    {
        img: '/user-check.svg',
        title: 'Master Financial Mathematics',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/user-check.svg',
        title: 'International Finance',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/user-check.svg',
        title: 'Coperate Finance',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/user-check.svg',
        title: 'Finacial Intermediation',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/user-check.svg',
        title: 'Financial Investments',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
    {
        img: '/user-check.svg',
        title: 'Investment banking',
        description: 'list one or two features of your ebook and enumerate the the importans of those features'
    },
]

export default function Details() {
    return (
        <div >


            <div>
                <h1 style={{ textAlign: "center" }}> What you will get if you purchase this book</h1>
                <p style={{ textAlign: "center" }}>
                    princeple of fiancial management is an educastion literature to empower and promote
                    knowlege on finance some of the benefit include
            </p>
            </div>
            <div className='detail-column'>

                {
                    data.map((item) => (
                        <div className='detail-item'>
                            <div>
                                <img src={item.img} alt='image' width='20px' className='detail-img' />
                            </div>
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                            </div>

                        </div>))
                }
            </div>
        </div>
    )
}