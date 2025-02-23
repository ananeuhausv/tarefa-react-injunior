import styles from './styles.module.css'
import fotoPessoal from '../../assets/foto.ana.png'

export default function personalCard() {
    return (
        <div className={styles.container}>
            <div className={styles.about}>
               <img src={fotoPessoal} alt="foto pessoal"/>
                <div>
                    <h1>Ana Laura N. Vega</h1>
                    <p>Dev Front-end</p>
                </div> 
            </div>
            
        </div>
    )
}
