import classNames from "classnames";
import { useState } from "react";
import "./RegisterForm.css";

import { createUser, signInUser } from "../../services/firebase/auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { createNewUser } from "../../services/firebase/functions";
import { Id, toast } from "react-toastify";

function RegisterForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const location = useLocation(); // Получаем текущий объект location
  const queryParams = new URLSearchParams(location.search); // Используем URLSearchParams для работы с параметрами

  const navigate = useNavigate(); 
  // Чтение параметров из URL
  const role = queryParams.get("role");

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const toastId: Id = toast.loading("Please wait...");

    createNewUser({ email, password, role }).then(({ data }) => {
      const status: 'succes' | 'error' = "message" in data ? "succes" : "error";

      const message = "message" in data ? data.message : data.error;

      showUpdateToast(toastId, message, status);

      console.log('status: ', status);
      if (status === "succes") {
        console.log('navigate');

        
        navigate("/");
      }
    });
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const formClasses = classNames({
    "login-form": true,
    "registration-form": true,
  });

  return (
    <>
      <div className="registration-wrraper">
        <form onSubmit={handleSubmitForm} className={formClasses}>
          <header>
            <h1>Register</h1>
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
          <button>Register</button>
        </form>
      </div>
    </>
  );
}


const showUpdateToast = (
  toastId: Id,
  text: string,
  status: "success" | "error" | "warning"
) => {
  toast.update(toastId, {
    render: text,
    type: status,
    autoClose: 5000,
    closeButton: null,
    isLoading: false,
  });
};

export default RegisterForm;
