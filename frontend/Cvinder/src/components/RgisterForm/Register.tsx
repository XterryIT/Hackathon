import classNames from "classnames";
import { useState } from "react";
import "./RegisterForm.css";

import { createUser, signInUser } from "../../services/firebase/auth";
import { Navigate } from "react-router-dom";

type HoverSides = "right" | "left" | null;

function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
//   const { currentUser } = useAuth();

  // createUser('test1@gmail.com', '12345678');
  const handleSubmitForm = (e) => {
    e.preventDefault();
    // signInUser(email, password);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  if (currentUser) {
    return <Navigate to="/" />;
  }

  const formClasses = classNames({
    "login-form": true,
    hidden: hoverSide === null,
    "right-side": hoverSide === "right",
    "left-side": hoverSide === "left",
  });

  return (
    <>
      <div className="registration-wrraper" className={formClasses} >
        <form onSubmit={handleSubmitForm}>
          <header>
            <h1>Log In</h1>
          </header>
          <div className="row">
            <label>E-mail</label>
            <input
              onChange={handleEmailChange}
              type="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="row">
            <label>Password</label>
            <input
              onChange={handlePasswordChange}
              type="password"
              placeholder="Enter password"
              required
            />
          </div>
          <button>Login</button>
          <a href="/register">Not registered? Register now.</a>
        </form>
      </div>
    </>
  );
}

export default LoginForm;
