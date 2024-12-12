import React, { useState } from 'react';
import { scheduleEmail } from '../api';

const EmailForm = () => {
    const [recipient, setRecipient] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [sendAt, setSendAt] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const emailData = {
            recipient,
            subject,
            body,
            sendAt: new Date(sendAt),  // Ensure this is a valid Date object
        };
    
        const response = await scheduleEmail(emailData);
        alert(response.message);
    };
    


  return (
    <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Recipient"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
            />
            <textarea
                placeholder="Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
            />
            <input
                type="datetime-local"
                value={sendAt}
                onChange={(e) => setSendAt(e.target.value)}
                required
            />
            <button type="submit">Schedule Email</button>
        </form>
  );
};

export default EmailForm;
