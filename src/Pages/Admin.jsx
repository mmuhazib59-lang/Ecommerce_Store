import React, { useState, useEffect } from "react";
import AdminLogin from "./Adminlogin";
import AdminPanel from "./AdminPanel";

const Admin = () => {
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  
  useEffect(() => {
    const storedLogin = localStorage.getItem("adminLoggedIn");
    if (storedLogin === "true") {
      setIsAdminLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("adminLoggedIn", "true");
    setIsAdminLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAdminLoggedIn(false);
  };

  return (
    <>
      {isAdminLoggedIn ? (
        <AdminPanel onLogout={handleLogout} />
      ) : (
        <AdminLogin onLogin={handleLogin} />
      )}
    </>
  );
};

export default Admin;
