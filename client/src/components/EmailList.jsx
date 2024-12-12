import React, { useEffect, useState } from 'react';
import { getEmails } from '../api';

const EmailList = () => {
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        const fetchEmails = async () => {
            const data = await getEmails();
            setEmails(data);
        };
        fetchEmails();
    }, []);
  return (
    <div className='list-email'>
            <h2>Scheduled Emails</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Recipient</th>
                        <th>Subject</th>
                        <th>Scheduled Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {emails.map((email) => (
                        <tr key={email._id}>
                            <td>{email.recipient}</td>
                            <td>{email.subject}</td>
                            <td>{new Date(email.sendAt).toLocaleString()}</td>
                            <td>{email.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  )
}

export default EmailList
