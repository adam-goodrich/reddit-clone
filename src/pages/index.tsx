import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { useState } from 'react';

export default function Home() {
  const [isEven, setIsEven] = useState(true);

  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNums = numArray.filter((num) => num % 2 === 0);

  const oddNums = numArray.filter((num) => num % 2 !== 0);

  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <button onClick={() => setIsEven(!isEven)}>
          {isEven ? 'Change to odd numbers' : 'Change to even numbers'}
        </button>
        <h2>{isEven ? 'Even Numbers' : 'Odd Numbers'}</h2>
        <ul>
          {isEven
            ? evenNums.map((num) => <li key={num}>{num}</li>)
            : oddNums.map((num) => <li key={num}>{num}</li>)}
        </ul>
      </main>
    </>
  );
}
