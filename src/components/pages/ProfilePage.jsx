
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfile } from '../../redux/Signup/ReducerAuth'; 
import { useDropzone } from 'react-dropzone';
import "../../styles/ProfilePageS.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProfilePage = () => {
  const dispatch = useDispatch();
  const authUser = useSelector((state) => state.auth.currentUser); 

  console.log("Current User in Component:", authUser); 
  const [profileState, setProfileState] = useState(authUser || {});
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  useEffect(() => {
    console.log(authUser); 
    setProfileState(authUser || {});
  }, [authUser]);

  const handleChange = (e) => {
    setProfileState({
      ...profileState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    // Basic validation
    if (!profileState.username || !profileState.email) {
      setErrorMessage('Username and email are required.');
      return;
    }

    setIsLoading(true);

    try {
      const updatedProfile = {
        ...profileState,
        profilePicture: file ? URL.createObjectURL(file) : profileState.profilePicture,
      };

      if (authUser?.id) {
       
        await dispatch(setProfile({ id: authUser.id, ...updatedProfile }));
        setProfileState(updatedProfile);
        setSuccessMessage('Profile updated successfully!');
        setFile(null);
      } else {
        setErrorMessage('User ID is undefined.');
      }
    } catch (error) {
      setErrorMessage('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="profile-container" data-aos="fade-up">
      <div className="profile-content">
        <div className="profile-info">
          <h2>Profile Information</h2>
          <img
            src={file ? URL.createObjectURL(file) : profileState.profilePicture || 'default-image-url'}
            alt={`${profileState.username || 'User'}'s profile`}
            className="profile-image"
          />
          <p className="profile-text">Username: {profileState.username || 'N/A'}</p>
          <p className="profile-text">Email: {profileState.email || 'N/A'}</p>
          <p className="profile-text">Bio: {profileState.bio || 'N/A'}</p>
        </div>

       

        <form className="profile-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={profileState.username || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={profileState.email || ''}
              onChange={handleChange}
              required
            />
          </div>
          <div data-aos="fade-in">
            <label htmlFor="profilePicture">Profile Picture:</label>
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} name="profilePicture" />
              {file ? (
                <p>{file.name}</p>
              ) : (
                <p>Drag 'n' drop a file here, or click to select one</p>
              )}
            </div>
          </div>
          <div data-aos="fade-in">
            <label htmlFor="bio">Bio:</label>
            <textarea
              id="bio"
              name="bio"
              value={profileState.bio || ''}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="button-container">
            <button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
        {successMessage && (
          <div className="alert alert-success">
            <span>{successMessage}</span>
            <button className="close-btn" onClick={() => setSuccessMessage('')}>
              &times;
            </button>
          </div>
        )}

        {errorMessage && (
          <div className="alert alert-danger">
            <span>{errorMessage}</span>
            <button className="close-btn" onClick={() => setErrorMessage('')}>
              &times;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;


