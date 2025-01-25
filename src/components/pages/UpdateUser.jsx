import React, { useState } from "react";
import '../../styles/manageusersStyle.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "../../redux/Signup/ReducerAuth";

const UpdateUser=()=>{
    const {id} = useParams();
    const users = useSelector((state)=> state.auth.users)
    const user = useSelector((state)=> state.auth.users.find((u)=> u.id === parseInt(id)))
    const [newusername, setNewusername] = useState(user.username)
    const [newemail, setNewemail] = useState(user.email)
    const [newrole, setNewrole] = useState(user.role)
    const [error, setError] = useState('')
    
    const dispatch = useDispatch()
    const navigate = useNavigate()


    console.log(user)
    const handleClicke=(e)=>{
        e.preventDefault()
        if (!newusername || !newemail || !newrole) {
            setError("All fields are required!");
            return;
        }
        if (user.email !== newemail && users.find((user) => user.email === newemail)) {
            setError("Email is already registered.");
              return false;
            }
        if (user.username !== newusername && users.find((user) => user.username === newusername)) {
            setError("User Name is already registered.");
                return false;
            }
        const newUser={
            id: parseInt(id),
            username:newusername,
            email:newemail,
            role:newrole,
        }
        dispatch(updateUser(newUser))
        navigate('/manage-users ')
    }

    return(<div className="contact-form-container">
        <h2>Update User</h2>
        <form>
            <input type="text" name="username" id="username" placeholder="User Name" value={newusername} onChange={(e)=>setNewusername(e.target.value)}/>
            <input type="text" name="email" id="email" placeholder="email" value={newemail} onChange={(e)=>setNewemail(e.target.value)}/>
            <select name="ville" id="ville" value={newrole} onChange={(e)=>setNewrole(e.target.value)}>
                <option value="user">User</option>
                <option value="admin">Admin</option>
            </select>
            {error && <p className="error">{error}</p>}
            <button onClick={(e)=>handleClicke(e)}>Enregistrer</button>
        </form>
    </div>)
}
export default UpdateUser;