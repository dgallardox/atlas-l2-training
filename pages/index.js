import styles from '../styles/Home.module.css'
import WordPressContent from '../components/WordPressContent';

export default function Home() {

  return (
    <div className={styles.container}>
      {/* Edit the text below */}
      <h2>Hello, my name is Pippy the Penguin</h2>
      <WordPressContent />
    </div>
  )
}
