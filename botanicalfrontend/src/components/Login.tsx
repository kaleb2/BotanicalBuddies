import  { useCallback, useState } from "react";
import { useAuth} from "../services/AuthService";
import { Link } from "react-router-dom";
import '../css/BotanicalBuddies.css'; 
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
  
export const Login = () => {

  const context = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitFailed, setSubmitFailed] = useState(false);

  const onSubmitLogin = useCallback(
    async () => {
      if (context) {
        console.log("OnSubmitLogin :", email, password);
        let loginSuccess = await context.handleLogin(email, password);
        if (!loginSuccess) {
          console.log("Setting submit failed");
          setSubmitFailed(true);
        }
      }
      else {
        console.log("Context is null");
      }
    }
    , [email, password, context, setSubmitFailed])

    const handleInputChange = event => {
      const { name, value } = event.target;
      if (name === "email") setEmail(value);
      else if (name === "password") setPassword(value)
    };

  return (
    <div>
      <h2>Login</h2>
      <div>
        {submitFailed ? (
            <div>SUBMIT FAILED!</div>
          )
          : null}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">Email</label>
        <input
          className="form-control"
          type="text"
          id="email"
          required
          value={email}
          onChange={handleInputChange}
          name="email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          required
          value={password}
          onChange={handleInputChange}
          name="password"
        />
      </div>

      <div>
        <button type="button" className="btn btn-primary" onClick={onSubmitLogin}>
          Sign In
        </button>
      </div>
      <div>
        <text>Don't have an account? </text>
        <Link to="/create-user">Create an account</Link>
      </div>
    </div>
  );
}
