import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router"
import '../../styles/manageusersStyle.css'
import { TbUsersPlus } from "react-icons/tb";
import { removeUser, searchuser, sortdate, sortrole } from "../../redux/Signup/ReducerAuth";
import { CgArrowsExchangeAltV, CgSearch } from "react-icons/cg";
import { useState } from "react";

const ManageUsers=()=>{
    const users = useSelector((state)=> state.auth.users)
    const searchList = useSelector((state)=> state.auth.searchList)
    const [sort, setSort] = useState('asc');
    const [search, setSearch] = useState('')
    const dispatch = useDispatch()
    console.log(users)
    const handleSortdate=()=>{
        const newSort = sort === "asc" ? "desc" : "asc";
        setSort(newSort);
        dispatch(sortdate(newSort));
    }
    const handleSortrole=()=>{
        const newSort = sort === "asc" ? "desc" : "asc";
        setSort(newSort);
        dispatch(sortrole(newSort));
    }
    const handleSearch=(e)=>{
        const value = e.target.value;
        setSearch(value);
        dispatch(searchuser(value)); 
    }
    const displayedList = search ? searchList : users;
    return(<div className="body">
        <h1 className="title">Users Management</h1>
        <Link to='/manage-users/add-user'>
            <div className="add">
                <div className="up-box" >
                    <div className="content">
                    <div className="writhing">
                        <h3>Add usser</h3>
                    </div>
                    <p><TbUsersPlus/> </p>
                    </div>
                </div>
            </div>
        </Link>
        <div className="search-container">
                <input className="search-input" type="text" name="searchuser" id="searchuser" placeholder="Search" onChange={handleSearch} />
                <CgSearch className="search-icon" />
            </div>
       
        <table>
            <thead>
                <tr>
                    <th>UserName </th>
                    <th>Email </th>
                    <th>Role <span className="sortuser" onClick={handleSortrole}><CgArrowsExchangeAltV /></span></th>
                    <th>Joined Date <span className="sortuser" onClick={handleSortdate}><CgArrowsExchangeAltV /></span></th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {displayedList.map((user)=>(
                    <tr key={user.id}>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>{user.joinedDate}</td>
                        <td>
                            <Link to={`/manage-users/${user.id}`}><button className="upt">Update</button></Link>
                            <button onClick={()=>dispatch(removeUser(user.id))} className="del">Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>)
}
export default ManageUsers;