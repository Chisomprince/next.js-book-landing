import styles from '../styles/nav.module.css'

export default function Nav() {
    return (
        <div className={styles.all}>
            <div>Landing Page</div>
            <div>
                <ul className={styles.ul}>
                    <li className={styles.li}>Home</li>
                    <li className={styles.li}>Pricing</li>
                    <li className={styles.li}>Products</li>
                </ul>
            </div>
        </div>

    )
}