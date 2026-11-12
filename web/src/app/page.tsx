import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Meet me</h1>
          <h2>Meet people through the things you enjoy</h2>
          <p>
            Meet me is a platform designed to help adults build real-world friendships, professional connections, and communities through small, structured, in-person group activities.
          </p>
          <p>
            Possible meetup activities include golf, bowling, cafe conversations, and pickup basketball at a park.
          </p>
        </div>
        <section>
          <div>
            <h2>Upcoming Meetups (0)</h2>
            <p>No meetups are scheduled yet. We are still planning the first gathering.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
