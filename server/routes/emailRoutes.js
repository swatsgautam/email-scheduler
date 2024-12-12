const express = require('express');
const Email = require('../models/Email');
const { scheduleEmails } = require('../services/emailService');

const router = express.Router();

// Create a scheduled email
router.post('/schedule', async (req, res) => {
    const { recipient, subject, body, sendAt } = req.body;
    
    const email = new Email({
        recipient,
        subject,
        body,
        sendAt,
    });

    await email.save();
    res.status(200).json({ message: 'Email scheduled successfully' });
});

// Get all scheduled emails
router.get('/emails', async (req, res) => {
    const emails = await Email.find();
    res.status(200).json(emails);
});

module.exports = router;
