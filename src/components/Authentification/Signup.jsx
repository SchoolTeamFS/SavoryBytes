import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupSuccess, signupFailure } from "../../redux/Signup/ReducerAuth";
import img from "../images/login.jpg";
import { useNavigate } from "react-router";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.auth.users);
  const error = useSelector((state) => state.auth.error);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);

  const validate = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
  
    if (!username || !email || !password || !confirmPassword || !terms) {
      dispatch(signupFailure("All fields are required."));
      return false;
    }
    if (!passwordRegex.test(password)) {
      dispatch(signupFailure(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      ));
      return false;
    }
    if (password !== confirmPassword) {
      dispatch(signupFailure("Passwords do not match."));
      return false;
    }
    if (users.find((user) => user.email === email)) {
      dispatch(signupFailure("Email is already registered."));
      return false;
    }
    if (users.find((user) => user.username === username)) {
      dispatch(signupFailure("User Name is already used."));
      return false;
    }
    return true;
  };
  

  const handleSignup = (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        id: users.length + 1,
        username,
        email,
        password,
        role: "user",
        bio:'',
        profilePicture:'',
        joinedDate: new Date(),
      };
      dispatch(signupSuccess(newUser));
      navigate('/login');
      resetForm();
    }
  };
  console.log(users)

  const resetForm = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setTerms(false)
  };
  return (
  <div className="div">

    <p className="encouragement"> Join us for delicious meals and fun! Start your culinary journey today! </p>
    <div className="form-body">
      <div className="img">
        <img src={img} alt="imagLogin" />
      </div>
      <div className="form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <div>
        <input type="checkbox" name="terms" id="terms" checked={terms} onChange={(e) => setTerms(e.target.checked)} />
        <label htmlFor="terms">I agree to the terms & policy</label>
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Sign Up</button>
      </form>
      </div>
    </div>
  </div>

  );
};

export default Signup;
