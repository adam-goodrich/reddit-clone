import styles from '@/styles/Post.module.scss';

function Post() {
  return (
    <article className={styles.post}>
      <small>
        r/Test <span className={styles.authored}>Posted by u/Test 10 minutes ago</span>
      </small>
      <h3>Default Post</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book. It has survived not
        only five centuries, but also the leap into electronic typesetting, remaining essentially
        unchanged. It was popularized in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
        PageMaker including versions of Lorem Ipsum.
      </p>
      <div className={styles.sidebar}>
        <button className={styles.upvote}>Upvote</button>
        <p>0</p>
        <button className={styles.downvote}>Downvote</button>
      </div>
    </article>
  );
}

export default Post;
