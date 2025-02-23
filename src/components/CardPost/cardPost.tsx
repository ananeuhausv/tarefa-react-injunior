import HeaderCardPost from '../HeaderCardPost/HeaderCardPost'
import styles from './styles.module.css'


export default function CardPost() {
    return (
        <div className={styles.container}>
        <HeaderCardPost/>
        <div>
            <p>Lorem ipsum dolor sit amet. <br /> <br /> Ex laboriosam dolorem non tempore earum et voluptatem suscipit ut cupiditate nisi est odit voluptates. Nam magni amet ut ipsam molestiae aut facilis minus et quia reiciendis sed excepturi rerum ex consequatur minima! Ex rerum sunt et incidunt officia et veritatis deserunt. Sit soluta laboriosam et incidunt sequi et eius fugiat est temporibus similique rem illum natus sit unde eveniet. <br /> <br /> Non quos omnis ut autem labore nam vero consequatur est porro similique ad adipisci quisquam!</p>
        </div>
        <div className={styles.feedback}>
            <h3>Deixe seu feedback</h3>
            <textarea name="feedback" placeholder="Escreva um comentário..."></textarea>
            
        </div>
        <div className={styles.button}>
            <button>Comentar</button>
        </div>
        </div>
    )
}