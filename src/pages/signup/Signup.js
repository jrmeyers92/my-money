import styles from "./Signup.module.css"
import { useState } from "react"
import {useSignup} from "../../hooks/useSignup"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayname, setDisplayname] = useState("");
  const [signUp, isPending, error] = useSignup();


  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(displayname, password, email)
    
  }

  return (
     
    <form className={styles['signup-form']} onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>Username: </span>
        <input type="text" 
        onChange={(e) => setDisplayname(e.target.value)}
        value={displayname}
        />
      </label>

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
      
      {!isPending && <button className="btn">Login</button>}
      {isPending && <button className="btn" disabled>loading</button>}
      {error && <p>{error}</p>}
      
    </form>
  )
}

export default Signup