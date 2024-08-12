import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homePage}>
      <h1>Welcome to Contact PHONE</h1>
      <p className={css.introText}>Manage your contacts in this app</p>
    </div>
  );
}
