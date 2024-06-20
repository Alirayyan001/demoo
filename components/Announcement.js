// src/components/Announcement.js
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/components/Announcement.css';

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [view, setView] = useState('menu');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/announcements');
        setAnnouncements(response.data);
      } catch (error) {
        console.error("There was an error fetching the announcements!", error);
      }
    };

    fetchAnnouncements();
  }, []);

  const handleAddAnnouncement = async () => {
    if (title.trim() === '' || content.trim() === '') {
      setError('Title and Content fields cannot be empty.');
      return;
    }

    try {
      const newAnnouncement = { title, content };
      const response = await axios.post('http://localhost:5000/api/announcements', newAnnouncement);
      setAnnouncements([...announcements, response.data]);
      setTitle('');
      setContent('');
      setError(''); // Clear error message after successful addition
    } catch (error) {
      console.error("There was an error adding the announcement!", error);
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/announcements/${id}`);
      setAnnouncements(announcements.filter(announcement => announcement._id !== id));
    } catch (error) {
      console.error("There was an error deleting the announcement!", error);
    }
  };

  const handleBackClick = () => {
    navigate('/dashboard');
  };

  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="announcement-container">
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        onClick={handleBackClick} 
        className="back-icon"
      />
      <h2>Announcements</h2>

      {view === 'menu' && (
        <div className="announcement-menu">
          <button onClick={() => handleViewChange('add')} className="menu-button">Add New Announcement</button>
          <button onClick={() => handleViewChange('manage')} className="menu-button">Manage Old Announcements</button>
        </div>
      )}

      {view === 'add' && (
        <div className="announcement-form">
          <input 
            type="text" 
            placeholder="Title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />
          <textarea 
            placeholder="Content" 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
          />
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleAddAnnouncement}>Add Announcement</button>
          <button onClick={() => handleViewChange('menu')} className="back-to-menu-button">Back to Menu</button>
        </div>
      )}

      {view === 'manage' && (
        <div className="announcement-list">
          {announcements.map((announcement) => (
            <div key={announcement._id} className="announcement-item">
              <h3>{announcement.title}</h3>
              <p>{announcement.content}</p>
              <button onClick={() => handleDeleteAnnouncement(announcement._id)}>Delete</button>
            </div>
          ))}
          <button onClick={() => handleViewChange('menu')} className="back-to-menu-button">Back to Menu</button>
        </div>
      )}
    </div>
  );
};

export default Announcement;
