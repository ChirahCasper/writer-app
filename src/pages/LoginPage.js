import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "", role: "Student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    // Simulating login by storing data in localStorage
    localStorage.setItem("user", JSON.stringify(credentials));
    navigate("/profile"); // Redirect to profile after login
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Login</h2>
      <div className="col-md-6 mx-auto">
        <div className="mb-3">
          <label>Email:</label>
          <input type="email" name="email" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Password:</label>
          <input type="password" name="password" className="form-control" onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label>Role:</label>
          <select name="role" className="form-control" onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="Writer">Writer</option>
            <option value="Student">Student</option>
          </select>
        </div>
        <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
