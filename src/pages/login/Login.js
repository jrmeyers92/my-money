import styles from "./Login.module.css"
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
     
    <form onSubmit={handleSubmit} className={styles["login-form"]}>
      <h2>Login</h2>
      <label>
        <span>Email: </span>
        <input type="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        />
      </label>

      <label>
        <span>Password: </span>
        <input type="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        />
      </label>
      
      <button>Login</button>
      
    </form>
  )
}

export default Login