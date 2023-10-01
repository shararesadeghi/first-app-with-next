import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Code Learning.ir</h1>
      <ul>
        <li>
          <Link href="/courses" replace>Go to courses page</Link>
        </li>
        <li>
          <Link href="/users">Go to users page</Link>
        </li>
      </ul>
    </div>
  )
}
