import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import DashBoard from './components/pages/Dashboard';
import ManageUsers from './components/pages/ManageUsers';
import UpdateUser from './components/pages/UpdateUser';
import AddUser from './components/pages/AddUser';
import Signup from './components/Authentification/Signup';
import Login from './components/Authentification/Login';
import Mode from './components/pages/Mode';
import Main from './components/pages/MainAbout';
import Categories from './components/Recepies/categ';
import RecipeDetails from './components/Recepies/recette';
import ProtectedRoute from './components/Authentification/ProtectedRoute';
import ProfilePage from './components/pages/ProfilePage';
import Favorites from './components/pages/Favorites';
import AddRecipeForm from './components/pages/AddRecipeForm';
import EditRecipe from './components/pages/EditRecipe';
const App = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-users"
            element={
              <ProtectedRoute>
                <ManageUsers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-users/add-user"
            element={
              <ProtectedRoute>
                <AddUser />
              </ProtectedRoute>
            }
          />
          <Route
            path="/manage-users/:id"
            element={
              <ProtectedRoute>
                <UpdateUser />
              </ProtectedRoute>
            }
          />
          <Route path="/:mode" element={<Mode />} />
          <Route path="/:mode/:categ" element={<Categories />} />
          <Route path="/about" element={<Main />} />
          <Route
            path="recette/:mode/:categ/:title"
            element={
              <ProtectedRoute>
                <RecipeDetails />
              </ProtectedRoute>
            }
          />
          <Route path='/profil' element={<ProtectedRoute><ProfilePage/></ProtectedRoute>}/>
          <Route path="/favorites" element={<ProtectedRoute><Favorites /></ProtectedRoute>} /> 
          <Route path="/addRecipe" element={<ProtectedRoute><AddRecipeForm /></ProtectedRoute>} /> 
          <Route
            path="/edit-recipe/:title"
            element={
              <ProtectedRoute>
                <EditRecipe />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
