import React, { useState } from "react";
import '../../styles/FormStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { addUser } from "../../redux/Signup/ReducerAuth";

   function AddUser() {
    const users = useSelector((state)=> state.auth.users)
    const [newusername, setNewusername] = useState('')
    const [newemail, setNewemail] = useState('')
    const [newpassword, setNewpassword] = useState('')
    const [error, setError] = useState('')
    const [newrole, setNewrole] = useState('user')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClicke=(e)=>{
        e.preventDefault();
        if (!newusername || !newemail || !newpassword || !newrole) {
            setError("All fields are required!");
            return;
        }
        if (users.find((user) => user.email === newemail)) {
            setError("Email is already registered.");
              return false;
            }
        if (users.find((user) => user.username === newusername)) {
            setError("User Name is already registered.");
                return false;
            }
        const newUser={
            id: users.length + 1,
            username:newusername,
            email:newemail,
            password: newpassword,
            role:newrole,
            profilePicture : '', 
            bio: '', 
            joinedDate: new Date().toISOString().split('T')[0],
        }
        dispatch(addUser(newUser))
        navigate('/manage-users ')
    }
     return (
        <div className="contact-form-container">
            <h2>Add User</h2>
            <form>
                <input type="text" name="username" id="username" placeholder="User Name" value={newusername} onChange={(e)=>setNewusername(e.target.value)}/>
                <input type="text" name="email" id="email" placeholder="email" value={newemail} onChange={(e)=>setNewemail(e.target.value)}/>
                <input type="password" name="password" id="password" placeholder="Default PassWord" value={newpassword} onChange={(e)=>setNewpassword(e.target.value)}/>
                <select name="ville" id="ville" value={newrole} onChange={(e)=>setNewrole(e.target.value)}>
                <option value="" disabled>Select Role</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
                </select>
                {error && <p className="error">{error}</p>}
                <button type="submit"  onClick={(e)=>handleClicke(e)}>Submit</button>
            </form>
        </div>
     );
   }

   export default AddUser;