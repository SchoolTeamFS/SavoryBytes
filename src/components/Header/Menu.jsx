import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { selectCategories } from "../../redux/recepiesReducer";

const Menu=()=>{
    const [selectedMode, setSelectedMode] = useState('normal')
    
    const navigate = useNavigate()
    const {name, role} = useSelector((state)=>state.auth.currentUser || {})
    const categories = useSelector(state => selectCategories(state, selectedMode));
    

    const handleCateg = (mode, category) => {
        if (!category) {
            console.error("Category is undefined or invalid.");
            return; 
        }
    
        const value = category.toLowerCase().replace(" ", "-");
        navigate(`/${mode}/${value}`);
        console.log("val", value);
    };

    return(<nav>
        <ul>
            {role === 'admin' && <li><NavLink to="/dashboard" className="a">DashBoard</NavLink></li>}
            <li><NavLink to="/" className="a">Home</NavLink></li>
            
            <li className="dropdown">
                <Link>Modes</Link>
                <div className="dropdown-content">
                    <p><NavLink to="/normal" onClick={() => setSelectedMode("normal")} className="dropdown-item">Normal</NavLink></p>
                    <p><NavLink to="/diet" onClick={() => setSelectedMode("diet")} className="dropdown-item">Diet</NavLink></p>
                    <p><NavLink to="/lactose-free" onClick={() => setSelectedMode("lactose-free")} className="dropdown-item">Lactose-free</NavLink></p>
                </div>
            </li>
            <li className="dropdown" onClick={(e)=>handleCateg(e)}>
                <Link className="dropdown-link">Categories</Link>
                <div class="dropdown-content">
                    {categories.map((category) => (
                        <p  class="dropdown-item "
                            key={category}
                            onClick={() => handleCateg(selectedMode, category)}
                            className="dropdown-item"
                        >
                            {category}
                        </p>
                    ))}
                </div>
            </li>
            <li><NavLink to="/about" className="a"> About </NavLink></li>
            {role==='user' && (
                    <li>
                        <NavLink to="/favorites" className="a">Favorites</NavLink>
                    </li>
                )}
            {role && <li><NavLink to="/profil" className="a">Profil</NavLink></li>}
            {role === 'admin' && <li className="dropdown">
                <Link>Manager</Link>
                <div className="dropdown-content">
                    <p><NavLink to="/manage-users" className="dropdown-item">Manage Users</NavLink></p>
                    <p><NavLink to="/addRecipe" className="dropdown-item">Add Recepie</NavLink></p>
                </div>
            </li>}

        </ul>
    </nav>)
}
export default Menu;