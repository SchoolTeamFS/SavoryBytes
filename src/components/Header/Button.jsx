import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { logout } from "../../redux/Signup/ReducerAuth";

const Buttons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentUser = useSelector((state)=>state.auth.currentUser)
  const handleLogout=()=>{
    dispatch(logout())
    navigate("/")

  }
  return (
    <div className="buttons">
      {currentUser === null && <NavLink to="/signup" ><button className="slin">Sign up </button></NavLink>}
      {currentUser !== null ? <button className="slin" onClick={handleLogout}>log out</button> : <NavLink to= "/login"><button className="slin"> Log in</button></NavLink>}
      
    </div>
  );
};

export default Buttons;
