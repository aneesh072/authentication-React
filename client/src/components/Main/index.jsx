import styles from './styles.module.css';

const Main = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar} />
      <h1>UserBook</h1>
      <button className={styles.white_btn} onClick={handleLogout}>
        {' '}
        Logout
      </button>
    </div>
  );
};
