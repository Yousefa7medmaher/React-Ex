import styles from "./page.module.css";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Login </h2>
         <form className={styles.loginForm}>
          <div className={styles.formGroup}> 
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className={styles.input}
              required
            />
          </div>
          <div className={styles.formGroup}> 
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className={styles.input}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        <div className={styles.extraOptions}>
          <a href="#" className={styles.forgotPassword}>
            Forgot Password?
          </a>
          <p className={styles.signupPrompt}>
            Don't have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
