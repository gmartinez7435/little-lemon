import React from "react";
import { useState } from "react";


const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function Login() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  const getIsFormValid = () => {
    return (
      firstName &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="sign-up-container">
      <form onSubmit={handleSubmit}>
        <fieldset className="sign-up">
          <h2>Sign Up</h2>
          <div className="Field">
            <label htmlFor="first-name">
              First Name <sup>*</sup>
            </label>
            <input
            id="first-name"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First name"
            />
          </div>
          <div className="Field">
            <label htmlFor="last-name">Last Name <sup>*</sup></label>
            <input
            id="last-name"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last name"
            />
          </div>
          <div className="Field">
            <label htmlFor="email">
              Email Address <sup>*</sup>
            </label>
            <input
            id="email"
            type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email address"
            />
          </div>
          <div className="Field">
            <label htmlFor="password">
              Password <sup>*</sup>
            </label>
            <input
            id="password"
              value={password.value}
              type="password"
              onChange={(e) => {
                setPassword({ ...password, value: e.target.value });
              }}
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              placeholder="Password"
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label htmlFor="role">
              Role <sup>*</sup>
            </label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <div className="form-btn">
          <button aria-label="Create account" type="submit" disabled={!getIsFormValid()} onClick={(e) => handleSubmit(e)}>
            Create account
          </button>
          <button aria-label="Sign in" type="submit" disabled={!getIsFormValid()} onClick={(e) => handleSubmit(e)}>
            Sign In
          </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default Login;
