/*import SubDivisao from '../components/Subdivisao'*/
import Linha from '../components/Linha';
import Tabuleiro from '../components/Tabuleiro';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    /*<div className={styles.container}>
      <SubDivisao />
      <SubDivisao preta />
      <SubDivisao />
      <SubDivisao preta/>
    </div>*/
<div className={styles.container}>
  <Tabuleiro />

    </div>

  )
}
