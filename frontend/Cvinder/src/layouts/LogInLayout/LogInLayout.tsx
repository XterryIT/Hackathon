import { Outlet } from "react-router-dom";

import "./LogInLayout.css";

export default function LogInLayout() {
  return (
    <div className="login-layout">
      <header>
        <h1>CVinder</h1>
      </header>
      <main className="login-content">
        <Outlet />
      </main>
    </div>
  );
}
