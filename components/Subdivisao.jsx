import styles from '../styles/Subdivisao.module.css'

export default function SubDivisao(props){
    
    return (       

    <div 
    style={{backgroundColor: props.preta ? "#000" : "#fff"}}
    className={styles.subdivisao}>teste
    </div>

    )
}