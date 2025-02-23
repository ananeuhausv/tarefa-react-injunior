import styles from './styles.module.css'


export default function Header() {
    return (
        <div className={styles.container}>
            <img src="/logo.svg" alt="" />
            <h1>Feed</h1>
        </div>
    )
}
