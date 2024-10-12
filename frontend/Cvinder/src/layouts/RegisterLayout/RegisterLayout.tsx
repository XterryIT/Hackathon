import { Outlet } from "react-router-dom";

import "./RegisterLayout.css";

export default function RegisterLayout() {
  return (
    <div className="register-layout">
      <header>
        <h1>CVinder</h1>
      </header>
      <main className="register-content">
        <Outlet />
      </main>
    </div>
  );
}
