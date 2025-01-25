import { createSlice } from '@reduxjs/toolkit';
import user1 from '../../components/images/UserImages/user1.jpg';
import user2 from '../../components/images/UserImages/user2.jpg';
import user3 from '../../components/images/UserImages/user3.jpg';
const initialState = {
  isAuthenticated: false,
  currentUser: null,
  searchList:null,
  users: [
    {
      id: 1,
      username: "Alice Doe",
      email: "alice@example.com",
      password: '1234',
      role: "admin",
      profilePicture: user1 ,
      bio: "i'm the admin",
      joinedDate: "2023-01-10",
     
    },
    {
      id: 2,
      username: "Bob Smith",
      email: "bob@example.com",
      password: '1234',
      role: "user",
      profilePicture: user2,
      bio: '',
      joinedDate: "2024-01-10",
      favorites: [],
    },
    {
      id: 3,
      username: "FoodLover123",
      email: "foodlover123@example.com",
      password: '1234',
      role: "user",
      profilePicture: user3,
      bio: "Passionate about discovering new flavors and recipes.",
      joinedDate: "2024-01-10",
      favorites: [],
    },
    
  ],
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess(state, action) {
      state.users.push(action.payload);
      state.error = null;
    },
    signupFailure(state, action) {
      state.error = action.payload;
    },
  
    loginSuccess(state, action) {
      const user = state.users.find((u) => u.id === action.payload.id);
      if (user) {
        state.isAuthenticated = true;
        state.currentUser = user;
      } else {
        state.error = "User not found";
      }
    },
    loginFailure(state, action) {
      state.error = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
    addUser(state, action) {
      state.users.push(action.payload);
    },
    removeUser(state, action) {
      if (state.currentUser.id !== action.payload) {
          state.users = state.users.filter((u) => u.id !== action.payload);
      } else {
          alert("An Admin cannot delete themselves.");
      }
  },
    updateUser(state, action) {
      const { id, username, email, role } = action.payload;
      const user = state.users.find((u) => u.id === id);
      if (user) {
        user.username = username;
        user.email = email;
        user.role = role;
      }
    },
    
    searchuser(state, action){
      return{
        ...state,
        searchList: state.users.filter((user)=> user.username.toLocaleLowerCase().includes(action.payload) || user.email.includes(action.payload))
      }
    },
    sortdate(state, action){
      const sortOrder = action.payload;
      if (sortOrder === 'asc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => new Date(a.joinedDate) - new Date(b.joinedDate)),
        };
      } else if (sortOrder === 'desc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => new Date(b.joinedDate) - new Date(a.joinedDate)),
        };
      }
        return state;
    },
    sortrole(state, action){
      const sortOrder = action.payload;
      if (sortOrder === 'asc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => a.role.localeCompare(b.role)),
        };
      } else if (sortOrder === 'desc') {
        return {
          ...state,
          users: [...state.users].sort((a, b) => b.role.localeCompare(a.role)),
        };
      }
      return state;
    },
    setProfile(state, action) {
      const { id, ...updatedData } = action.payload;

      if (state.currentUser && state.currentUser.id === id) {
        state.currentUser = { ...state.currentUser, ...updatedData };
      }

      const userIndex = state.users.findIndex((user) => user.id === id);
      if (userIndex !== -1) {
        state.users[userIndex] = { ...state.users[userIndex], ...updatedData };
      }
    },
    addToFavorites: (state, action) => {
      const { userId, recipe } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
    
      if (userIndex !== -1) {
        if (!state.users[userIndex].favorites) {
          state.users[userIndex].favorites = [];
        }
    
        const isAlreadyFavorite = state.users[userIndex].favorites.some(
          (fav) => fav.recipeTitle === recipe.recipeTitle
        );
    
        if (!isAlreadyFavorite) {
          state.users[userIndex].favorites.push(recipe);
        }
      }
    
      if (state.currentUser && state.currentUser.id === userId) {
        if (!state.currentUser.favorites) {
          state.currentUser.favorites = [];
        }
    
        const isAlreadyFavorite = state.currentUser.favorites.some(
          (fav) => fav.recipeTitle === recipe.recipeTitle
        );
    
        if (!isAlreadyFavorite) {
          state.currentUser.favorites.push(recipe);
        }
      }
    },
    removeFromFavorites: (state, action) => {
      const { userId, recipeTitle } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);

      if (userIndex !== -1) {
        state.users[userIndex].favorites = state.users[userIndex].favorites.filter(
          (fav) => fav.recipeTitle !== recipeTitle
        );
      }

      if (state.currentUser && state.currentUser.id === userId) {
        state.currentUser.favorites = state.currentUser.favorites.filter(
          (fav) => fav.recipeTitle !== recipeTitle
        );
      }
    },
  }
});

export const {
  signupSuccess,
  signupFailure,
  loginSuccess,
  loginFailure,
  logout,
  addUser,
  removeUser,
  updateUser,
  sortdate,
  searchuser,
  sortrole,
  setProfile,
  addToFavorites,
  removeFromFavorites,

} = authSlice.actions;

export default authSlice.reducer;
