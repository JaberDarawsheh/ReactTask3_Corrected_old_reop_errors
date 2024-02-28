import styles from './Navbar.modulee.css'; 

function Navbar() {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className='row'>
          <div className={styles.logoContainer}>     
      <a href="#">mangcoding Store</a>
          </div>
          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Course</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Article</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className='authContainer'>
            <a href="#" className='login'>
              Log in
            </a>
            <a href="#" className='register'>
              Register
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
