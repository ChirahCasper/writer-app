import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "Student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    // Store user in local storage (Temporary solution instead of database)
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/profile"); // Redirect to profile
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Sign Up</h2>
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
        <button className="btn btn-success w-100" onClick={handleSignup}>Sign Up</button>
      </div>
    </div>
  );
};

export default SignupPage;
