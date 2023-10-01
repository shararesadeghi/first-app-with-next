import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const clickHandler = ()=>{
    //login process
    router.push("/students");
  }
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
        <li>
          <button onClick={clickHandler}>LogIn</button>
        </li>
      </ul>
    </div>
  )
}
