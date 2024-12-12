import React, { useState } from 'react';
import './App.css';
import EmailForm from './components/EmailForm';
import EmailList from './components/EmailList';
import Navbar from './components/Navbar';

function App() {
  const [currentTab, setCurrentTab] = useState('home');
  return (
    <div>
            <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
            <div style={{ padding: '20px' }}>
                {currentTab === 'home' && <EmailForm />}
                {currentTab === 'emails' && <EmailList />}
            </div>
        </div>
  );
}

export default App;
