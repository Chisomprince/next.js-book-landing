
export default function Profile() {
    return (
        <div className='profile'>


            <div>
                <img src='/aaron.jpg' alt='image' width='100px' style={{ border: "0px solid ", borderRadius: "50%" }} />
            </div>
            <h3 style={{ color: 'white' }}>About The Author</h3>
            <p className='profile-p'>
                A product is anything that is capable of satisfying human want/needs.
                It may not be for immediate consumption (finished product) but for further production (Raw material).
                The use of the word “anything” may sound high handed to casual observers but the truth is that no matter what it is,
                once it is capable of satisfying a given human want/need, it constitutes a product

            </p>

            <h3 style={{ color: 'white' }}>Follow Author</h3>
            <div>
                <img src='/inbox.svg' alt='image' width='25px' style={{ margin: 10 }} />
                <img src='/info.svg' alt='image' width='25px' style={{ margin: 10 }} />
                <img src='/instagram.svg' alt='image' width='25px' style={{ margin: 10 }} />

                <img src='/linkedin.svg' alt='image' width='25px' style={{ margin: 10 }} />
            </div>

        </div>
    )
}