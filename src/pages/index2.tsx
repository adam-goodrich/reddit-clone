import Head from 'next/head';
import styles from '@/styles/Home.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, selectValue } from 'slices/counterSlice';
import { selectIsEven, setIsEven } from 'slices/isEvenSlice';
import { connectToDatabase } from 'util/mongodb';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Header from '@/components/Header/Header';

interface User {
  username: string;
  email: string;
  password: string;
  _id: string;
}

interface Props {
  users: User[];
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Home: React.FC<Props> = ({ users }) => {
  const [user, setUser] = useState<User>(users[0]);
  const count = useSelector(selectValue);
  const isEven = useSelector(selectIsEven);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNums = numArray.filter((num) => num % 2 === 0);

  const oddNums = numArray.filter((num) => num % 2 !== 0);

  const handleChangeUser = () => {
    if (user === users[0]) {
      setUser(users[1]);
    }
    if (user === users[1]) {
      setUser(users[2]);
    }
    if (user === users[2]) {
      setUser(users[0]);
    }
  };

  return (
    <>
      <Head>
        <title>Reddit Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Header />
        <h1>Hello World! Jira testing 2</h1>
        <Button variant="contained" onClick={handleOpen}>
          Open modal
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>Password: {user.password}</h2>
            <h2>Id: {user._id}</h2>
            <Button variant="contained" onClick={handleChangeUser}>
              Change User
            </Button>
            <br />
            <Button variant="contained" onClick={handleClose} style={{ marginTop: '20px' }}>
              Close
            </Button>
          </Box>
        </Modal>
        <p className={styles.countParagraph}>The value of count is {count}</p>
        <div className={styles.buttonContainer}>
          <button onClick={() => dispatch(increment())} className={styles.button}>
            Increment
          </button>
          <button onClick={() => dispatch(decrement())} className={styles.button}>
            Decrement
          </button>
        </div>
        <button onClick={() => dispatch(setIsEven())} className={styles.button}>
          {isEven ? 'Change to odd numbers' : 'Change to even numbers'}
        </button>
        <h2>{isEven ? 'Even Numbers' : 'Odd Numbers'}</h2>
        <ul className={styles.list}>
          {isEven
            ? evenNums.map((num) => <li key={num}>{num}</li>)
            : oddNums.map((num) => <li key={num}>{num}</li>)}
        </ul>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const userData = await db.collection('users').find({}).toArray();

  const users = JSON.parse(JSON.stringify(userData));

  return {
    props: {
      users: users,
    },
  };
}

export default Home;
